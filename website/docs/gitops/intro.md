---
id: gitops-intro
sidebar_position: 6
---

## GitOps for Azure landing zones

Changes in the different environments introduced and promoted following GitOps concepts, principles and mechanisms:

- Configuration changes are described in a declarative language (here using Terraform).
- Operations are promoted from one environment to another via Git operations (Git commit, push, pull request).
- Changes are promoted only once they have reached quality gates (provided by automation, CI mechanisms and test suites executions) to promote higher quality changes.
- Changes are promoted only once they also have been validated by service owners in the environment (that can be declared in the DevOps configuration of the platform).

## Code and configuration repositories

GitOps leverages Git as a single source of truth for declarative infrastructure and applications. Having a common code structure and naming convention is critical to maintain code quality and enhance the developer experience (especially for new team members).

When we deal with Infra as Code and landing zone deployments, we must also make sure that the structure of our repository will support the workflow of the different teams involved and enforce the segregation of concerns with the multiple environments. *Should the code / variables be organized by environments or by teams involved in the deployment
process*? Is a legitimate question. Code structure and organization is always a hot topic, and while one size fits all is rarely the norm, we tend to recommend starting with either of the following extending's on Terraform (unclear) documentation.

For a given environment, ideally the code should remain identical and only the variables should evolve. The following example illustrates the two repository we recommend: one for the configuration and one for the code of deployment.

Looking closer at the configuration repository, we can see that each environment is represented in a folder and each environment enforces the following structure:

| **directory name** |  **purpose and content** |
| -------------------| ------------------------|
| devops             | Contains the DevOps environment variables to configure the Azure DevOps variable groups, and pipeline definitions |
| landingzones       | Contains a directory for each landing zone. Each directory will include its own pipeline definition for apply, destroy, etc.   Each directory must also contain the landing zones variable definitions files.
| launchpad          |  Contains the configuration files for the launchpad environment. |

### Empowering the developers

It is often more productive to have developers equipped with their own subscriptions in order to accelerate the engineering time. Those subscriptions can be part of [Azure Dev/Test](https://azure.microsoft.com/pricing/dev-test/), can be part of [Visual Studio Subscription](https://azure.microsoft.com/pricing/member-offers/credit-for-visual-studio-subscribers/), or can be sourced via the usual enterprise or partners.

We very often observe that a dedicated engineering sandpit which includes autonomous identity tenant (Azure Active Directory tenant), although it might appear more difficult to maintain, but will enable faster composition and innovation, especially to iterate on the reduction of privilege engineering as it will save round-trips with corporate identity teams. This will enable a frictionless collaboration and better collaboration when the new service is going through security validation.
