---
id: provider-intro
sidebar_position: 4
---

# Introduction to CAF Terraform provider

## What is CAF provider?

Naming convention is important, the CAF provider helps you manage naming convention (either relying on CAF recommended naming convention or using your own).

## Why using CAF provider?

The naming convention provider allows you to go faster from integration to production: while you are running it testing mode, it will generate names randomly (useful to test resources which names need to be unique in the world). Once you are done and ready to deploy for production, you select pass-through mode to use your own name (after cleaning the name based on the allowed character set for each Azure resources).

## Where to find CAF provider?

The CAF Terraform provider is verified by Hashicorp and is present in the [Hashicorp Terraform registry here](https://registry.terraform.io/providers/aztfmod/azurecaf/latest) and you can contribute to it [on GitHub.](https://github.com/aztfmod/terraform-azurerm-caf)

## How to use the CAF provider?

To use the provider, simply add:

```terraform
terraform {
  required_providers {
    azurecaf = {
      source = "aztfmod/azurecaf"
      version = "1.2.11"
    }
  }
}
```

Example usage:

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
