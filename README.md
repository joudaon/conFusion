conFusion
===================

Installing node
---------------

To install Node on your machine, go to https://nodejs.org and click on the Download button. Depending on your computer's platform (Windows, MacOS or Linux), the appropriate installation package is downloaded. As an example, on a Mac, you will see the following web page. Click on the Download button. Follow along the instructions to install Node on your machine. (Note: Now Node gives you the option of installing a mature and dependable version and a more newer stable version. You can choose to install the mature and dependable version. I will continue to use this version in the course. You can choose to install the newer stable version if you wish. You may not see any perceptible differences between the two as users).

> **Note:** On Windows machines, you may also to install <i class="icon-provider-github"></i> Git on your machine if you don't have it already installed. Some of the Node based tools that we use later will need <i class="icon-provider-github"></i> Git to be installed. You can download the installer from here.

> **Note:** On Windows machines, you may need to configure your PATH environmental variable in case you forgot to turn on the add to PATH during the installation steps.

Verifying the Node Installation

Open a terminal window on your machine. If you are using a Windows machine, open a cmd window or PowerShell window with admin privileges.
To ensure that your NodeJS setup is working correctly, type the following at the command prompt to check for the version of Node and NPM

```sh
$ node -v
$ 
$ npm -v
```

Installing lessc Compiler
-------------------------
Type the following at the command prompt:

```sh
$ npm install -g less
```

This will install the less NPM module globally so that it can be used by any project. Note: if you are executing this on a Mac or Linux machine, you may need to add "sudo" to the beginning of this command. This will make available the lessc compiler for us so that we can compile Less files.

Go to the less file path and next type the following at the command prompt to compile the Less file into a CSS file:

```sh
$ lessc file.less > file.css
```

Installing Bower
----------------

Install Bower as a global node module. To do this, type the following at the command prompt:

```sh
$ npm install -g bower
```

> **Note:**  Precede this command with sudo on Mac or Linux

#### <i class="icon-file"></i> Create a bower.json file

Create and initialize a bower.json file by typing the following at the command prompt:

```sh
$ bower init
```

Bower will ask several questions which you should answer.

#### <i class="icon-plus"></i> Installing Bower Components

```sh
$ bower install bootstrap -S
$ 
$ bower install font-awesome -S
```

#### <i class="icon-wrench"></i> Installing Bower Components once in bower.json file

```sh
$ bower install 
```

Additional info
----------------

#### <i class="icon-help-circled"></i> Help for writing readme.md document

- List of supported StackEdit icons: https://stackedit.io/res/libs/fontello/demo.html
- StackEdit Live editor: https://stackedit.io/
