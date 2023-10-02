---
id: rover-tools
sidebar_position: 2
---

# Rover versions and tools

## What is inside rover

Rover is based on a standard Linux distribution (currently Ubuntu), rover.sh (our Terraform wrapper) and a set of commonly-used tools with their extensions when applicable. The best is to review by yourself in the [Dockerfile](https://github.com/aztfmod/rover/blob/main/Dockerfile).

## Rover channels

We typically maintain rovers with the last 2 major versions of Terraform.

These are the following channels for rover releases [on our Docker Hub](https://hub.docker.com/search?q=aztfmod&type=image):

| Release channel                                                        | Description                                                                                                                                                                       |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [rover stable](https://hub.docker.com/r/aztfmod/rover)          | Stable, tested and validated versions of the tools.                                                                                                                               |
| [rover preview](https://hub.docker.com/r/aztfmod/rover-preview) | New features being tested and stabilized.                                                                                                                                         |
| [rover alpha](https://hub.docker.com/r/aztfmod/rover-alpha)     | Hot off-the-oven features, used under a professional's supervision.                                                                                                               |
| [rover-agent](https://hub.docker.com/r/aztfmod/rover-agent)     | Releases that are aligned with above channels but include the CI/CD agents/runners for the following products: [GitHub Actions](https://github.com/features/actions), [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/), [Terraform Cloud/Enterprise](https://www.terraform.io/cloud-docs/agents), [Git Labs](https://docs.gitlab.com/ee/user/clusters/agent/install/) |

## Components in current version

After a long time of using version-specific builds for every components, we moved to use mostly latest versions of the components unless integration tests show incompatibilities.

Components currently in rover:

| Category        | Components                                                                                        |
|-----------------|---------------------------------------------------------------------------------------------------|
| Utilities       | [powershell](https://github.com/PowerShell/PowerShell), [mssql-tools](https://docs.microsoft.com/en-us/sql/linux/sql-server-linux-setup-tools?view=sql-server-ver15), [az](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli), [jq](https://stedolan.github.io/jq/download/), [yq](https://github.com/mikefarah/yq), [python](https://www.python.org/), [pywinrm](https://github.com/diyan/pywinrm), [golang](https://go.dev/), [kubectl](https://kubernetes.io/docs/tasks/tools/), [helm](https://helm.sh/docs/intro/install/), [github shell](https://github.com/cli/cli), [openvpn](https://openvpn.net/)                                                         |
| IaC tools       | [terraform](https://www.terraform.io/), [terraform-docs](https://github.com/terraform-docs/terraform-docs), [vault](https://www.vaultproject.io/), [packer](https://www.packer.io/), [ansible](https://www.ansible.com/)                                                 |
| DevSecOps       | [checkov](https://www.checkov.io/), [tfsec](https://aquasecurity.github.io/tfsec)                                                          |
| Code excellence | [tflint](https://github.com/terraform-linters/tflint), [tflint with azure ruleset](https://github.com/terraform-linters/tflint-ruleset-azurerm), [caflint](https://github.com/aztfmod/caflint), [pre-commit](https://pre-commit.com/), [pre-commit hooks for Terraform](https://github.com/antonbabenko/pre-commit-terraform), [shellspec](https://github.com/shellspec/shellspec) |
