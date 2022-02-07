---
id: rover-tools
sidebar_position: 4
---

# Rover versions and tools

## What is inside rover

Rover is based on a standard Linux distribution (currently Ubuntu), rover.sh (our Terraform wrapper) and a set of commonly-used tools with their extensions when applicable.

## Rover channels

We typically maintain rovers with the 2 latest major versions of Terraform.

These are the following channels for rover releases [on our Docker Hub](https://hub.docker.com/search?q=aztfmod&type=image):

| Release channel                                                        | Description                                                                                                                                                                       |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [rover stable](https://hub.docker.com/r/aztfmod/rover)          | Stable, tested and validated versions on the tools.                                                                                                                               |
| [rover preview](https://hub.docker.com/r/aztfmod/rover-preview) | New features being tested and stabilized.                                                                                                                                         |
| [rover alpha](https://hub.docker.com/r/aztfmod/rover-alpha)     | Hot off the oven features, used under a professional's supervision.                                                                                                               |
| [rover-agent](https://hub.docker.com/r/aztfmod/rover-agent)     | Releases that are aligned with above channels but include the CI/CD agents/runners for the following products: [GitHub Actions](https://github.com/features/actions), [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/), [Terraform Cloud/Enterprise](https://www.terraform.io/cloud-docs/agents), [Git Labs](https://docs.gitlab.com/ee/user/clusters/agent/install/) |

## Components in current version

We mostly use latest versions of the components unless integration tests show incompatibilities.

Components currently in rover:

| Category        | Components                                                                                        |
|-----------------|---------------------------------------------------------------------------------------------------|
| Utilities       | powershell, mssql-tools, az, jq, yq, pywinrm, golang                                              |
| IaC tools       | terraform, terraform-docs, vault, packer, ansible                                                 |
| DevSecOps       | checkov, tfsec, kubectl, helm                                                                     |
| Code excellence | tflint, tflint with azure ruleset, caflint, pre-commit, pre-commit hooks for Terraform, shellspec |
