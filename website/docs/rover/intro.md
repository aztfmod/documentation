---
id: rover-intro
sidebar_position: 1
---

# Introduction to the CAF rover

Although as a first approach it might seem more natural and simple to use Terraform on your laptop, the CAF **rover** is helping you managing your enterprise Terraform deployments on Microsoft Azure and is composed of two parts:

* **A docker container**
  * Allows consistent developer experience on PC, Mac, Linux, including the right tools, git hooks and DevOps tools.
  * Native integration with [Visual Studio Code](https://code.visualstudio.com/docs/remote/containers), [GitHub Codespaces](https://github.com/features/codespaces).
  * Contains the versioned tool set you need to apply landing zones.
  * Helps you switching components versions fast by separating the run environment and the configuration environment.
  * Ensure pipeline ubiquity and abstraction run the rover everywhere, whichever pipeline technology.

* **A Terraform wrapper**
  * Helps you store and retrieve Terraform state files transparently on Azure storage account.
  * Facilitates the transition to CI/CD.
  * Enables seamless experience (state connection, execution traces, etc.) locally and inside pipelines.

Using rover has the following advantages:

* Simplifies setup and configuration across DevOps teams: everyone works with the same versions of the tools.
* Abstracts and helps with the Terraform state management.
* Helps preserve stability across components versions.
* Helps testing different versions of binaries (new version of Terraform, Azure CLI, jq, tflint etc.)
* Facilitates the identity transition to any CI/CD: namely all CI/CD have container capabilities.
* Allows easy transition from one DevOps environment to another (GitHub Actions, Azure DevOps, Jenkins, CircleCI etc.)

Rover is an open-source project and you can use it directly from [Docker Hub](https://hub.docker.com/search?q=aztfmod&type=image), or create your own, to match your organization's own DevOps toolkit. You can find the [rover project here](https://github.com/aztfmod/rover).
