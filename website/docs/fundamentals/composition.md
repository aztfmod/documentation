---
id: lz-composition
sidebar_position: 3
---

# Cross-levels composition

## Transparent composition across layers

To deliver a complete environment, just as for any other software project, we want to avoid a monolithic configuration and instead compose an environment calling multiple landing zones.

With Terraform, you can read a state file's output and use it as input variables for another landing zone.

We use this feature to compose complex architectures as illustrated above, without writing any line of code. Reading another landing zone content is implemented by a variable, vastly simplifying for you the composition and the complex configuration creation.

### Global settings

A few exceptions exist to the hierarchy model, there are variables and value that are persisted across all levels and reachable from all levels:

* **global settings**: everything related to the commons for a particular environment (which regions are supported for an environment, which naming convention is used, the tags inheritance settings, etc.)
* **diagnostics settings**: any diagnostics repository you create at any level will be stored and will become composable from the current and above levels.
