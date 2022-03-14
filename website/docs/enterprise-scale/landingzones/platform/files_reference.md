---
id: elsz-files-reference
sidebar_position: 3
---

# Core files settings reference

In this section, we will review the fundamental parameters to deploy customized stack and review the various parameters.

## contoso.caf.platform.yaml

The ```*.caf.platform.yaml``` contains all core parameters that will be reused across all levels, entries in this file will be used to generate configuration files and the readme files to execute all the commands in the various levels.
The root of this file is called ```caf_terraform:``` and contains the following sections:

### naming_convention

The section is used to describe how names are being created in the platform, in development phases, we often use part of the name to be automatically generated so we can integrate and test faster, once you are reaching production, you will use name as passthrough in order to apply your own naming convention.

| parameter     | required | possible values         | description                                                                                                                                                          |
|---------------|----------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| passthrough   | yes      | ```true```, ```false``` | When set to true, use the name as specified in the files after filtering. If set to false, will add generate names aligned to CAF guidance will prefixes if defined. |
| prefix        | yes      | string                  | Use a prefix to put in front of all names generated.                                                                                                                 |
| random_length | yes      | integer                 | The number or randomly generated characters at the end of the resource name, if passthrough is set to false.                                                         |
| inherit_tags  | yes      | ```true```, ```false``` | Define if resources will inherit the tags defined at the resource group level.                                                                                       |

### launchpad

| parameter                         | required | possible values                       | description                                                                                                                                                         |
|-----------------------------------|----------|---------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| caf_environment                   | yes      | any string                            | Name of the environment to use or to create. A ```caf_environment``` is used to discriminate multiple environments that could live on the same subscriptions.       |
| account_replication_type          | yes      | ```GRS```, ```LRS```, ```ZRS```, etc. | Specifies the type of redundancy to use for the storage accounts supporting the Terraform state files. Can be any supported Azure storage account replication type. |
| regions                           | yes      | block (see below)                     | A block defining the set of regions to be available in the object model (see below)                                                                                 |
| default_region_key                | yes      | string (one of the region key names)  | Choose the region to use for deployment if the resource does not specify a region.                                                                                  |
| number_of_levels                  | yes      | integer                               | Define the number of levels to be deployed in the stack.                                                                                                            |
| blob_versioning_enabled           | yes      | ```true```, ```false```               | Enables versioning for the Terraform state file blobs.                                                                                                              |
| container_delete_retention_policy | yes      | number between 1 and 365 days         | Specifies the number of days that the Terraform state blob should be retained.                                                                                      |
| delete_retention_policy           | yes      | number between 1 and 365 days         | Specifies the number of days that the Terraform state container should be retained, between 1 and 365 days.                                                         |
| subscription_id                   | yes      | string                                | GUID of the subscription to use to deploy launchpad.                                                                                                                |
| subscription_name                 | yes      | string                                | Name of the subscription to use to deploy launchpad.                                                                                                                |
| tenant_id                         | yes      | string                                | Home tenant of the subscription to use to deploy launchpad.                                                                                                         |
| global_tags_propagated            | yes      | ```true```, ```false```               | If set to true, the tags defined in launchpad will be propagated to all resources in this environment.                                                              |
| tags                              | yes      | block of tags                         | A block of tags that will be added to the launchpad.                                                                                                                |

```regions``` blocks will contain a structure of keys with name and short names (slug) as in the following example:

```yaml
regions:
  region1:
      # set the short form of the Azure region
    name: southeastasia  # Use the lower-case region's name, short version with no space
    slug: sea
  region2:
    name: eastasia  # Use the lower-case region's name, short version with no space
    slug: ea
```

| parameter | required | possible values       | description                                                |
|-----------|----------|-----------------------|------------------------------------------------------------|
| key       | yes      | any string            | region1 and region2 are the keys, they can be any string.  |
| name      | yes      | any Azure region name | name of the region as in the Azure available regions list. |
| slug      | yes      | any string            | short name you want to refer the region to.                |


### billing_subscription_role_delegations

This section defines settings for the subscription billing role delegation from and EA or MCA account.

If you are not planning to generate subscriptions automatically, you can define it to false, you will still need to input the azuread_user settings.

| parameter                               | required | possible values         | description                                                                                                                                                                                                                                                                                         |
|-----------------------------------------|----------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enable                                  | yes      | ```true```, ```false``` | Enable the subscription billing account delegation functions.                                                                                                                                                                                                                                       |
| azuread_user_ea_account_owner           | yes      | string                  | UPN of the user doing the manual deployment of the platform. Must be populated even if you are not using automatic subscription generation.                                                                                                                                                         |
| azuread_user_ea_account_owner_object_id | yes      | string                  | GUID of the user doing the manual deployment of the platform. Must be populated even if you are not using automatic subscription generation. If that user is already loged-in to an azure cli session you can get the object_id by running: ```az ad signed-in-user show --query objectId -o tsv``` |
| billing_account_name                    | no       | number                  | Billing account name (typically 8 digits)                                                                                                                                                                                                                                                           |
| enrollment_account_name                 | no       | number                  | Enrollment account name (typically 6 digits)                                                                                                                                                                                                                                                        |


### configuration_folders

This section defines how and where the output files (Terraform configuration files) are going to be stored.

| parameter | required | possible values | description                           |
|-----------|----------|-----------------|---------------------------------------|
| platform  | yes      | block           | content of the block described below. |

The platform block takes the following settings:

| parameter                 | required | possible values                                | description                                                                                                                                                                                                                     |
|---------------------------|----------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| cleanup_destination       | yes      | ```true```, ```false```                        | true: forces the destination folder to be deleted and re-created before the files are created. false: create the target folder structure if it does not exist. On sub-sequent executions, the folder structure is reused as is. |
| destination_base_path     | yes      | typically ```/tf/caf ```                       | The base path to generate the files.                                                                                                                                                                                            |
| destination_relative_path | yes      | typically ```configuration/contoso/platform``` | The second part of the path where to generate the configuration files.                                                                                                                                                          |

### platform_core_setup

The settings in this section defines the core behaviour of the environment including reference to the enterprise-scale architecture.

| parameter        | required | possible values | description                           |
|------------------|----------|-----------------|---------------------------------------|
| enterprise_scale | yes      | block           | content of the block described below. |

The enterprise_scale block takes the following parameters:

| parameter                                 | required | possible values                                                    | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------------------|----------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| enable                                    | yes      | ```true```, ```false```                                            | true: Will generate files for enterprise-scale landing zones, including management groups and policies.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| management_group_name                     | yes      | strings                                                            | The base path to generate the files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| management_group_prefix                   | yes      | strings                                                            | The second part of the path where to generate the configuration files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| deploy_core_landing_zones                 | yes      | ```true```, ```false```                                            | true: forces the destination folder to be deleted and re-created before the files are created. false: create the target folder structure if it does not exist. On sub-sequent executions, the folder structure is reused as is.                                                                                                                                                                                                                                                                                                                                                                                                  |
| enable_azure_subscription_vending_machine | yes      | ```true```, ```false```                                            | The base path to generate the files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| clean_up_destination_folder               | yes      | ```true```, ```false```                                            | The second part of the path where to generate the configuration files.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| subscription_deployment_mode              | yes      | ```reuse_subscriptions```, ```dedicated_new```, ```single_reuse``` | Whichever value you set in this parameter, you will need to further configuration parameters in ```subscriptions.yaml ``` to further drive the subscriptions to be used. The following values could be used: - ```single_reuse```: will deploy all landing zones in the same subscription. Useful to get your hands-on the composition model and practice environment composition. Do not use in production.  - ```dedicated_new```: will create a new set of subscriptions based on the subscription vending machine settings. - ``reuse_subscriptions```: will reuse a set of subscriptions provided by their subscription ID. |
| root_parent_id                            | yes      | strings                                                            | The name of the root parent where you want to deploy the enterprise scale management groups hierarchy.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| private_lib                               | yes      | typically ```configuration/contoso/platform```                     | A block as defined below, we recommend you do not modify those values unless instructed so.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

The private lib defines logic for each version of enterprise scale module, typically those values but you should not modify those values unless instructed so:

```
    private_lib:
      version_to_deploy: v1.1.1
      v0.1.x:
        caf_landingzone_branch: "2107.1"
      v0.3.3:
        caf_landingzone_branch: "patch.5.4.4"
      v1.1.1:
        caf_landingzone_branch: "2203.0"
```

### platform_management

| parameter | required | possible values         | description |
|-----------|----------|-------------------------|-------------|
| enable    | yes       | ```true```, ```false``` | --          |

### networking_topology

| parameter         | required | possible values   | description                                                                                                         |
|-------------------|----------|-------------------|---------------------------------------------------------------------------------------------------------------------|
| deployment_option | yes       | ```virtual_wan``` | Currently supported mode is only ```virtual_wan```, this might change in the future depending on customer requests. |

### platform_identity

| parameter                 | required | possible values                               | description                                                                                                                                                                              |
|---------------------------|----------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tenant_name               | yes      | string                                        | Name of the primary domain name of the Azure Active Directory tenant (*.onmicrosoft.com or custom domain name)                                                                           |
| azuread_identity_mode     | yes      | ```logged_in_user```, ```service_principal``` | Currently supported mode for production is ```service_principal```, for lab and learning purposes, we support ```logged_in_user``` to run command from rover in interactive environment. |
| caf_platform_maintainers  | yes      | list of principal names                       | Ignored in logged in user mode, contains the list of UPN or groups to be added in the security group ```caf_platform_maintainers```                                                      |
| caf_platform_contributors | yes      | list of principal names                       | Only used in service_principal mode, contains the list of UPN or groups to be added in the security group ```caf_platform_contributors```                                                |


### gitops

| parameter              | required | possible values    | description                                                                                                                                             |
|------------------------|----------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| caf_landingzone_branch | yes       | any version number | any official branch to use from the landing zone logic repository, this should be aligned with release version recommended in the git starter template. |