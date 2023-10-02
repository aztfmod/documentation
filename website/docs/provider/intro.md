---
id: provider-intro
sidebar_position: 4
---

# Introduction to Azure Terraform SRE provider

## What is CAF provider?

Naming convention is important, the CAF provider helps you manage naming convention (either relying on CAF recommended naming convention or using your own).

## Why using CAF provider?

The naming convention provider allows you to:

1. Clean user inputs before sending to Terraform provider, verify names format, enforces prefixes/suffixes.
2. Go faster from integration to production: while you are running it testing mode, it will generate names randomly (useful to test resources which names need to be unique in the world). Once you are done and ready to deploy for production, you select pass-through mode to use your own name (after cleaning the name based on the allowed character set for each Azure resources).


## Where to find CAF provider?

The Azure Terraform SRE provider is verified by Hashicorp and is present in the [Hashicorp Terraform registry here](https://registry.terraform.io/providers/aztfmod/azurecaf/latest) and you can contribute to it [on GitHub.](https://github.com/aztfmod/terraform-azurerm-caf)

## How to use the CAF provider?

To use the provider, simply add:

```terraform
terraform {
  required_providers {
    azurecaf = {
      source = "aztfmod/azurecaf"
      version = "~> 1.2.0"
    }
  }
}
```

### Names as resources

Initially the Azure Terraform SRE provider was used to implement name and categorize them as resources, you can leverage it using the following syntax:

```terraform
resource "azurecaf_name" "rg_example" {
  name            = "demogroup"
    resource_type   = "azurerm_resource_group"
    prefixes        = ["a", "b"]
    suffixes        = ["y", "z"]
    random_length   = 5
    clean_input     = true
}

resource "azurerm_resource_group" "demo" {
  name     = azurecaf_name.rg_example.result
  location = "southeastasia"
}

```

It will generate the following outputs plan:

```
Terraform will perform the following actions:

  # azurecaf_name.rg_example will be created
  + resource "azurecaf_name" "rg_example" {
      + clean_input   = true
      + id            = (known after apply)
      + name          = "demogroup"
      + passthrough   = false
      + prefixes      = [
          + "a",
          + "b",
        ]
      + random_length = 5
      + resource_type = "azurerm_resource_group"
      + result        = (known after apply)
      + results       = (known after apply)
      + separator     = "-"
      + suffixes      = [
          + "y",
          + "z",
        ]
      + use_slug      = true
    }

  # azurerm_resource_group.demo will be created
  + resource "azurerm_resource_group" "demo" {
      + id       = (known after apply)
      + location = "southeastasia"
      + name     = (known after apply)
    }

Plan: 2 to add, 0 to change, 0 to destroy.
```

### Names as data sources

Starting in the CAF provider version 1.2.22, a new feature allows you to use the provider with ```data``` source instead of ```resource```. 
This allows compacter Terraform plans and state files and computes the name at plan time.

Example usage:

```terraform
terraform {
  required_providers {
    azurecaf = {
      source = "aztfmod/azurecaf"
      version = "~> 1.2.22"
    }
  }
}

provider "azurerm" {
  features {
   }
}

data "azurecaf_name" "rg_example" {
  name            = "demogroup"
    resource_type   = "azurerm_resource_group"
    prefixes        = ["a", "b"]
    suffixes        = ["y", "z"]
    random_length   = 5
    clean_input     = true
}

resource "azurerm_resource_group" "demo" {
  name     = data.azurecaf_name.rg_example.result
  location = "southeastasia"
}


```

It will generate the following output plans:

```
data.azurecaf_name.rg_example: Reading...
data.azurecaf_name.rg_example: Read complete after 0s [id=a-b-rg-demogroup-aygcu-y-z]

Terraform used the selected providers to generate the following execution plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:

  # azurerm_resource_group.demo will be created
  + resource "azurerm_resource_group" "demo" {
      + id       = (known after apply)
      + location = "southeastasia"
      + name     = "a-b-rg-demogroup-aygcu-y-z"
    }

Plan: 1 to add, 0 to change, 0 to destroy.
```

Going forward we recommend the usage of the provider as``` data source``` instead of ```resource```.