---
id: rover-init
sidebar_position: 4
---

# Rover Init

## Introduction to rover init

Rover ```init``` allows you to deploy a mini launchpad to support a development environment with remote state on Azure storage accounts. 

This includes:

- A keyvault to store secrets and variables.
- A ```level 0``` storage account to store state files.

This is not meant for production use and should be used for development environments only. It allows you to test simple cross landing-zones state files composition.

To run ```rover init```, you can use your interactive login principal or a service principal. Rover init does not require owner permissions on the subscription.

## Minimal version of rover

Rover init has been released in rover version 2211, you can get it:

```bash
docker pull aztfmod/rover:1.3.4-2211.0822
```

## Syntax

The following arguments and commands are available with ```rover init```:

| Argument | Required | Default value | Description |ß Example |
|---|---|---|---|---|
| -env | yes | N/A | Name of the development environment. | ```-env contoso-sandpit``` |
| -location | no | australiaeast | Azure region where to deploy the mini launchpad. | ```-location southeastasia``` |
| --clean | no | N/A | The command purges the resources related to the specified environment. | ```-env contoso-sandpit --clean``` |


## Examples

1. Login to rover

```bash
rover login
```

2. Create the mini launchpad

```bash
rover init -env mydeenv -location southeastasia
```

A typical output will look like:

```bash
@calling process_actions
Creating resource group: mydeenv-launchpad
/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad
  ...created
Creating storage account: stmydeenv4bcbeaa59ecfbb7
/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.Storage/storageAccounts/stmydeenv4bcbeaa59ecfbb7
stg created
"/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.Storage/storageAccounts/stmydeenv4bcbeaa59ecfbb7/providers/Microsoft.Authorization/roleAssignments/358edcb8-02da-4217-b5d0-e78256fd9e61"
role
true
Creating keyvault: kvmydeenv0b7dd4b74870e27
"/subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad/providers/Microsoft.KeyVault/vaults/kvmydeenv0b7dd4b74870e27"
"https://kvmydeenv0b7dd4b74870e27.vault.azure.net/secrets/subscription-id/4a959bb9b35b4b9a912a3dc253999d30"
"https://kvmydeenv0b7dd4b74870e27.vault.azure.net/secrets/tenant-id/84862b8c1c6f46dab3e74d13cb1746f4"
  ...created

You can deploy a landingzone with the rover by running:
  rover -lz [landingzone_folder_name] -a [plan|apply|destroy|validate|refresh|graph|import|output|taint|untaint|'state list'|'state rm'|'state show']
```

3. Use the mini launchpad to deploy your test resources

```bash
 rover -lz /tf/caf/landingzones/caf_solution -level level0 \
  -var-folder /tf/caf/configuration/hub \
  -env mydeenv \
  -tfstate mydeenv-test1.tfstate \
  -a plan  
```

4. Cleanup the dev environment (optional)

You can cleanup your development environment after use or keep it running.

```bash
rover init -env mydeenv --clean
```

You can verify that an environment has been correctly deleted by reviewing:

```bash
@calling process_actions
Deleting launchpad caf_environment=mydeenv and caf_tfstate=level0 in /subscriptions/a-b-c-d-e/resourceGroups/mydeenv-launchpad
Launchpad caf_environment=mydeenv and caf_tfstate=level0 in mydeenv-launchpad destroyed.
➜  caf git:(main) 
```
