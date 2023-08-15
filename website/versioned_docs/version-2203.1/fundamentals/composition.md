---
id: lz-composition
sidebar_position: 3
---

# Code-less composition across state files

To deliver an enterprise environment, it is usually reasonable to do so across multiple state files to balance the risk, manage different lifecycle and teams. Just as for any other software project, we want to avoid a monolithic configuration and instead compose an environment calling multiple landing zones.

With Terraform, you can read a state file's output and use it as input variables for another landing zone.

We use this feature to compose complex architectures, but we do it automatically for you not having to write any line of code.

Reading another landing zone content is implemented by a variable, vastly simplifying for you the composition and the complex configuration creation.

How to compose from one landing zones to another?

Each landing zones is defined by a ```configuration.tfvars``` or ```landingzones.tfvars```.

As an example below, this is the file for management landing zone in level 1:

```hcl
landingzone = {
  backend_type        = "azurerm"
  level               = "level1"
  key                 = "management"
  global_settings_key = "launchpad"
  tfstates = {
    launchpad = {
      tfstate   = "caf_launchpad.tfstate"
      workspace = "tfstate"
      level     = "lower"
    }
  }
}
```

In the ```tfstate``` section, you can observe an object called ```launchpad```, which mentions to Terraform to load under that name, the Terraform state file ```caf_launchpad.tfstate```. That state file is stored inside the workspace (storage container) ```tfstate``` located one level lower (since current level is level1 - mentioned in the field level), then we refer to level 0.

What it means that for any object inside that particular landing zones, you can refer to any object whether it has been deployed in the same deployment or in another deployment (within the same level or one level below).

For instance in your level1 - management deployment, you can deploy a resources within a resource group that has been provisioned in the level below:

```hcl
automations = {
  account1 = {
    name = "automationAccount1"
    sku  = "Basic"
    resource_group = {
      key    = "auto-account"
      lz_key = "launchpad"
    }
  }
}
```

The same concept applies throughout the components of the framework and allow you to compose virtually across any object of the model. That composition model allows you to compose with the objects without caring of the real name of the object (real name of the resource, after the naming convention applies)

### Composition outside of the CAF object model

Sometimes you have to deal with objects deployed manually, via another automation. You are then able to compose with those objects referring to their resource ID or sometimes names:

#### Example with name

In this case you simply refer to the resource group name as it exists already in the target subscription for the deployment:

```hcl
automations = {
  account1 = {
    name = "automationAccount1"
    sku  = "Basic"
    resource_group = {
      name    = "caf-auto-account-zooz-001"
    }
  }
}
```

#### Example with resource ID

In this case you simply refer to the resource group's resource ID as it exists already in the target subscription for the deployment:

```hcl
virtual_hub_connections = {
  vnet_to_hub = {
    name = "vnet-connectivity-prod-fw-plinks-TO-vhub-prod"
    virtual_hub = {
      lz_key = "connectivity_virtual_hubs_prod"
      key    = "prod"
    }
    vnet = {
      resource_id = "/subscriptions/dklsdfk/etc."
    }
  }
}
```
### Global settings

A few exceptions exist to the hierarchy model, there are variables and value that are persisted across all levels and reachable from all levels:

* **global settings**: everything related to the commons for a particular environment (which regions are supported for an environment, which naming convention is used, the tags inheritance settings, etc.)
* **diagnostics settings**: any diagnostics repository you create at any level will be stored and will become composable from the current and above levels.
