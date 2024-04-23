+++
title="Python Local Setup"
+++

## Installation

1. Go to go/software and search for `Python Software Foundation Python`. 
2. Chose the version you want to install and the one approprite for your OS. Highly recommend to install > 3.10.0
3. Click Install.

{{% notice style="tip" %}}
Set a standard for your team to use the same version of Python. 
{{% /notice %}}

## Certificates

Its important to have the right certificates installed on your machine. Humana Root Certs, Zscalar Certs and other certs related to the APIs that your application may access are required.

For the basic certs, we maintain a repo that you can clone and install the certs.
[Data Platform Management Repo](https://github.com/Corp-Func-and-Ent-Sys-EMU/dataplatform-management/tree/main/cross_platform/certs)

1. Create a cert folder locally such as `C:\Users\<User>\certs`, and place the cacert.pem file in that folder.
2. Create a two environment variables: `SSL_CERT_FILE` and `REQUESTS_CA_BUNDLE` and set the value to the path of the cacert.pem file.
   
    ![ Screenshot](/images/certs-variables.jpg)

## Create a Virtual Environment
To avoid installing packages directly into your system Python installation, you can use a virtual environment. A virtual environment provides an isolated Python interpreter for your project. Any packages that you use inside this environment will be independent of your system interpreter. This means that you can keep your project's dependencies separate from other projects and the system at large.

Cd to your project folder Enter the following command

```bash
python  -m venv venv
```

This will create folder venv under the project folder

Enter the following command to open the virtual environment

**For Mac**
``` bash
source venv/bin/activate
```
**For Windows**
``` bash
.\venv\Scripts\Activate.ps1
```
This will open terminal under venv environment.

{{% notice style="note" %}}
You will have to active your virtual environment every time you reopen your session/IDE. You can deactivate the virtual environment by entering the command `deactivate` in the terminal. 
{{% /notice %}}

## Install Packages (JFrog Artifactory)

Humana uses jfrog artifactory, once you have proper access, you can log in to the artifactory using SSO Login . To get access, go to go/LearnArtifactory.

Generate a personal Access Token by going to [JFrog Artifactory](go/artifactory).
Once you are logged into the website, click on your name on the right hand side.
It opens up a drop down → Edit Profile → click on generate Api key, copy to the clip board, do not click on the test, just save.


### Setting up JFrog Artifactory

1. Create a file called `pip.ini` in the folder `C:\Users\<USER>\AppData\Roaming\pip`
2.  Following is an example content of the file. Please note that the repo may vary based on the type of package you are trying to install.

    ```bash
    [global]
    index-url = https://srajadurai@humana.com:<APIKEY>@humana.jfrog.io/artifactory/api/pypi/dataplatform-eng-pypi-remote/simple

    extra-index-url = https://srajadurai@humana.com:<APIKEY>@humana.jfrog.io/artifactory/api/pypi/pythonhosted-pypi-remote/simple
    ```

## FAQ

{{% expand title="I get SSL Errors similar to the following:" %}}
If you get errors such as `SSL: CERTIFICATE_VERIFY_FAILED` or `certificate verify failed: unable to get local issuer certificate (_ssl.c:1131)` , its likely that your certs are not set up properly.

Follow the instructions above to set up the certs. If that doesnt solve the problem, copy the contents of the cacert.pem file and paste it at the end of `venv\Lib\site-packages\certifi\cacert.pem` file. Here venv is the name of the virtual environment you created.

If you dont see certifi folder you need to reinstall python.

{{% /expand %}}

{{% expand title="I get 403 errors when trying to do a pip install of a package " %}}
If you get 403 errors when trying to install a package, its likely that the package you are trying to access does not exist or vulnarable and blocked by JFROG.

{{% /expand %}}