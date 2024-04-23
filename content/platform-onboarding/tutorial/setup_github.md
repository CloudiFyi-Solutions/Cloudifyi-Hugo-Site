+++
title ="Set up github with Git"
+++

## Overview

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Pre-requisites

Install Git on your local machine. You can download it from [go/shopping](https://go/shopping).
Here is a [ direct link to Git-SCM Git ](https://appshop.humana.com/Shopping/RequestItem/Detail/4952?query=git)

Install Visual Studio Code. Download it from [go/software](https://go/software).

## Video Tutorial

{{< youtube id="kHkQnuYzwoo" autoplay="false" >}}

## Get Token

The first step in using tokens is to generate a token from the GitHub website. Note that it would be best practice to use different tokens for different computers/systems/services/tasks so that they can be easily managed.

To generate a token:

1. Log into GitHub
2. Click on your name / Avatar in the upper right corner and select Settings
3. On the left, click Developer settings
4. Select Personal access tokens and click Generate new token
5. Give the token a description/name and select the scope of the token
6. I selected `repo` only to facilitate pull, push, clone, and commit actions
7. Click the link "Read more about OAuth scopes" for details about the permission sets
8. Click Generate token
9. Copy the token – this is your new password!

# Configure local GIT

Once we have a token, we need to configure the local GIT client with a username and email address. On a Linux machine, use the following commands to configure this, replacing the values in the brackets with your username and email:

```bash
git config --global user.name "bruce_humana"
git config --global user.email "bruce@humana.com"
git config -l
```

# Clone from GitHub

Once GIT is configured, we can begin using it to access GitHub. In this example I perform a `git clone` command to copy a repository to the local computer. When prompted for the username and password, enter your GitHub username and the previously generated token as the password.

# Configure Credential Caching

Lastly, to ensure the local computer remembers the token, we can enable caching of the credentials. This configures the computer to remember the complex token so that we don't have to.

```bash
git config --global credential.helper cache
```

If needed, you can later clear the token from the local computer by running:

```bash
git config --global --unset credential.helper
```
