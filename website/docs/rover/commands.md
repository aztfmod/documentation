---
id: rover-commands
sidebar_position: 3
---

# Rover commands

## Commonly used commands

Beyond a container, rover is your one-stop tool to help on landing zone and landing zones state management.

What people love about rover is the ubiquity it gives them and seamless transition from local development environment with pipelines. In this articles, you will find the most commonly used commands for rover and some details on the state locator process.

Rover is by nature multi-subscription, and in landing zones worlds, the subscription where you want to deploy your resource is just another parameter of rover, just as the subscription where to store the state files and locate the launchpad.

## Login

The first command you will have to run is ```rover login```:

You can run a plain rover login:

```bash
rover login
```

You can specify additional context to restrict the token, like the tenant name and subscription to use:

```bash
rover login --tenant [tenant_name.onmicrosoft.com or tenant_guid (optional)] --subscription [subscription_id_to_target(optional)]
```

You can log out running the following command:

```bash
rover logout
```

## Landing zones commands

Once authentication is completed, a typical rover command looks like:

```bash
rover \
 -lz /tf/caf/landingzones/caf_launchpad \
 -var-folder /tf/caf/configuration/contoso/platform/level0/launchpad \
 -tfstate_subscription_id a-b-c-d-e \
 -target_subscription f-g-h-i \
 -tfstate caf_launchpad.tfstate \
 -log-severity ERROR \
 -launchpad \
 -env contoso \
 -level level0 \
 -p ${TF_DATA_DIR}/caf_launchpad.tfstate.tfplan \
 -a plan
```

The following table summarizes the most common parameters and their default values:

| argument                          | required | default value                                                                                      | Description                                                                                                                                                                                                                                                                                   | Example                                                                |
|-----------------------------------|----------|----------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------|
| -lz                               | yes      | N/A                                                                                                | Path to landing zone (```.tf``` files) to be executed. This is typically ```/tf/caf/landingzones/caf_launchpad```  , ```/tf/caf/landingzones/caf_solution``` or any add-ons from ```/tf/caf/landingzones/caf_solution/add-ons```. This could also be your own custom written Terraform files. | /tf/caf/landingzones/caf_launchpad                                     |
| -var-folder                       | yes      | N/A                                                                                                | Path to the set of configuration files. All ```.tfvars``` files in directory will be expanded.                                                                                                                                                                                                | /tf/caf/configuration/contoso/platform/level0/launchpad                |
| -env                              | yes      | N/A                                                                                                | String that defines a name for an environment to use. This is defined as  (used in the state locator function as described below.)                                                                                                                                                            | ```contoso```                                                          |
| -level                            | yes      | N/A                                                                                                | Specifies the level in the Azure Terraform SRE hierarchy where to deploy the resources (possible value are level1-level4)                                                                                                                                                                                     | ```level1```                                                           |
| -a                                | yes      | N/A                                                                                                | Action to take with the current parameters, possible values are ```plan```, ```apply```, ```destroy```, ```validate```, ```refresh```, ```graph```, ```import```, ```output```, ```taint```, ```untaint```, ```'state list'```, ```'state rm'```, ```'state show'```                          | ```plan```                                                             |
| -log-severity                     | no       | ERROR                                                                                              | Specifies the Terraform log verbosity this sets the ```TF_IN_AUTOMATION``` parameters, possible options are: ```TRACE```, ```DEBUG```, ```INFO```, ```WARN``` or ```ERROR```                                                                                                                  | ```ERROR```                                                            |
| -tfstate_subscription_id          | no       | If no value specified, rover is assuming the currently logged-in subscription from az cli context. | GUID of the subscription containing the tfstate (launchpad). This will be used to locate and store the tfstate files.                                                                                                                                                                         | ```a-b-c-d-e```                                                      |
| -target_subscription              | no       | If no value specified, rover is assuming the currently logged-in subscription from az cli context. | GUID of the subscription where to deploy the resources.                                                                                                                                                                                                                                       | ```a-b-c-d-e```                                                        |
| -workspace                        | no       | ```tfstate```                                                                                      | Specifies the storage account container where to store the tfstate for this landing zone. This could be used to isolate landing zones from each others by specifying Azure AD RBAC entries on the specific container withing the storage account.                                             | ```my_container```                                                     |
| -p                                | no       | N/A                                                                                                | Specifies the location where to store the plan file, if not specified a plan file will be automatically created for you when you specify ```-a apply``` and will be stored ```in ${TF_DATA_DIR}```                                                                                           | ${TF_DATA_DIR}/caf_launchpad.tfstate.tfplan                            |
| -launchpad                        | no       | N/A                                                                                                | Flag that indicates that the current deployment is a launchpad.                                                                                                                                                                                                                               | ```-launchpad```                                                      |
| -tfc                              | no       | N/A                                                                                                | Flag that indicates that the current deployment will use the TFC configured settings to store the state (refer to the Use TFC section of this guide)                                                                                                                                          | ```-tfc```                                                            |
| -skip-permission-check            | no       | N/A                                                                                                | Flag to skip the check that the currently logged-in principal is owner of the target subscription (only checked for launchpad)                                                                                                                                            | ```-skip-permission-check```                                          |
| -impersonate-sp-from-keyvault-url | no       | N/A                                                                                                | Flag that indicates rover to use impersonate the Service Principal and use the credentials stored in the Azure Key Vault which URL is specified as parameter. Requires launchpad_credentials landing zone to be setup (more details to be published soon.)                                    | ```-impersonate-sp-from-keyvault-url https://myakv.vault.azure.net/```|
| init | no       | N/A                                                                                                | Initialize developer remote state management in azurerm                               | ```init -env name -location southeastasia```|
| init --clean | no       | N/A                                                                                                | Delete the initialized remote state management in azurerm                               | ```init --clean -env name -location southeastasia``` |

## Examples

### untaint

When a resource has been marked as tainted and you want to untaint it.

```shell
# module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg is tainted, so must be replaced
+/- resource "azurerm_storage_container" "stg" {
      ~ has_immutability_policy = false -> (known after apply)
      ~ has_legal_hold          = false -> (known after apply)
      ~ id                      = "https://xxxxxxxxxxxxxxxx.blob.core.windows.net/di001" -> (known after apply)
      ~ metadata                = {} -> (known after apply)
        name                    = "di001"
      ~ resource_manager_id     = "/subscriptions/000000000-0000-0000-0000-000000000000/resourceGroups/cont-rg-data-landing-zone-storage-lqi/providers/Microsoft.Storage/storageAccounts/xxxxxxxxxxxxxxx/blobServices/default/containers/di001" -> (known after apply)
        # (2 unchanged attributes hidden)
    }
```

You need to extract the terraform resource. In our example:

```shell
module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg
```

and run the following rover command. You need to wrap the resource under double quotes and escape the quotes in the square brakets.

```bash
rover \
  --impersonate-sp-from-keyvault-url https://cont-kv-scl-xxx.vault.azure.net/ \  // Remove this line if you are not using service principals
  -lz /tf/caf/landingzones/caf_solution \
  -tfstate_subscription_id 000000000-0000-0000-0000-000000000000 \
  -target_subscription 000000000-0000-00000-00000000 \
  -tfstate data-landing-zone_prod_level3.tfstate \
  -env contoso \
  -level level3 \
  -w data-landing-zone-prod `\
  -p ${TF_DATA_DIR}/data-landing-zone_prod_level3.tfstate.tfplan \
  -a untaint "module.solution.module.storage_containers[\"storageWorkspace_di001\"].azurerm_storage_container.stg"
  ```

When executed the rover will display a similar output.

```shell
Terraform has been successfully initialized!
Terraform init return code 0
@calling other
running terraform untaint -state=/home/vscode/.terraform.cache/contoso/rover_jobs/20220316003626962686570/tfstates/level3/data-landing-zone-prod/data-landing-zone_prod_level3.tfstate  module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg
Resource instance module.solution.module.storage_containers["storageWorkspace_di001"].azurerm_storage_container.stg has been successfully untainted.
Terraform untaint return code: 0
```

## Workspace management

In the previous section, workspace is used as a argument to specify where to place the tfstate (in-lieu of the default ```tfstate``` container inside the storage account), rover workspace can be used as a command to manage workspaces:

Create a workspace:

```bash
rover workspace create application-workspace -level level1 -env contoso-sandpit
```

Delete a workspace:

```bash
rover workspace delete application-workspace -level level1 -env contoso-sandpit
```

List all workspaces for a level in an environment:

```bash
rover workspace list -level level1 -env contoso-sandpit
```

:::note
Although this is possible to create the workspace containers with rover, we recommend you create and manage them via Terraform code.
:::

<!-- ## State locator details

Rover offers you to manage state and operations on Azure Terraform SRE. It allows you to do commands on storage accounts deployed by launchpad various levels.

We retrieve the state files using the following tags on storage accounts and Key Vault: -->
