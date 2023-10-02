---
id: module-intro
sidebar_position: 2
---

# Introduction to the CAF super-module

## What is CAF module?

We have seen numerous customers spending much time creating their own Terraform modules in their own private repositories, and while it's hard to find the right balance of what components should be inside a single module, it is a very time consuming task. As part of our engagements with customers we took an approach enabled by Terraform 0.13 to develop the concept of a super-module, similar to the concept of superapp, allowing you to create configurations files for any Azure components while focusing on one tested logic. The advantage of having one module is to be able to easily compose across all components inside the module: i.e., you can describe a virtual machine, how it is linked to a virtual network, a Key Vault etc.

The core concept of the module is to compose an environment based on Terraform configuration files instead of writing ad-hoc code for each component.

We want to promote "**infrastructure-as-data**" in favor of ad-hoc "infrastructure-as-code", in order to make composition more accessible and rely on a strong community to write code.

## Why using CAF module?

* Accelerate innovation with the community: many users use and contribute to the module across the world, have tested it and are using it in production, enabling your DevOps teams to focus on delivering value instead of coding and testing a module.
* Composition across all Azure components enables you to create new architectures with unprecendented speed.

## Where to find CAF module?

The CAF Terraform module is verified by Hashicorp and is present in the [Hashicorp Terraform registry here](https://registry.terraform.io/modules/aztfmod) and you can contribute to the module [on GitHub.](https://github.com/aztfmod/terraform-azurerm-caf)

## How to use CAF module?

It is important to note that although the module is part of the CAF landing zones solution, it can be used similarly to any other standalone module, directly from the Terraform registry or from pipelines.   This is demonstrated in the [Hashicorp blog post](https://www.hashicorp.com/blog/go-big-or-go-small-building-in-azure-caf-with-terraform-cloud).

Just invoke the module using the following call:

```terraform
module "caf" {
  source  = "aztfmod/caf/azurerm"
  version = "~>5.5.0"

  #feed me with variables!
}
```

<img src="https://aztfmod.azureedge.net/media/standalone.gif" width="720"/> <br/> <br/>
