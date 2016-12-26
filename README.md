conFusion
===================

Installing nodeJS
-----------------

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


Bower
----------------

Keeping track of all these packages and making sure they are up to date (or set to the specific versions you need) is tricky. Bower to the rescue!

Bower can manage components that contain HTML, CSS, JavaScript, fonts or even image files. Bower doesn’t concatenate or minify code or do anything else - it just installs the right versions of the packages you need and their dependencies.

To get started, Bower works by fetching and installing packages from all over, taking care of hunting, finding, downloading, and saving the stuff you’re looking for. Bower keeps track of these packages in a manifest file, bower.json. How you use packages is up to you. Bower provides hooks to facilitate using packages in your tools and workflows.

Bower is optimized for the front-end. If multiple packages depend on a package - jQuery for example - Bower will download jQuery just once. This is known as a flat dependency graph and it helps reduce page load.

#### <i class="icon-file"></i> Installing Bower global

Install Bower as a global node module. To do this, type the following at the command prompt:

```sh
$ npm install -g bower
```

> **Note:** Precede this command with sudo on Mac or Linux

#### <i class="icon-file"></i> Create a bower.json file

Create and initialize a bower.json file by typing the following at the command prompt:

```sh
$ bower init
```

Bower will ask several questions which you should answer.

#### <i class="icon-plus"></i> Installing Bower packages

```sh
$ bower install bootstrap -S
$ 
$ bower install font-awesome -S
```

#### <i class="icon-wrench"></i> Installing Bower Components once in bower.json file

Installs the project dependencies listed in bower.json

```sh
$ bower install 
```

#### <i class="icon-th-list"></i> Listing installed packages

You can easily find out which packages are installed using the list command.

```sh
$ bower list 
```

#### <i class="icon-refresh"></i> Updating packages

Updating a package is pretty straightforward. If you’ve used a bower.json file you can execute a simple update command to update all of the packages at once. However, the update tool will abide by the version restrictions you’ve specified in the bower.json file.

```sh
$ bower update 
```
To update an individual package you again use the update command, this time specifying the name of the package you wish to update.

```sh
$ bower update <package> 
```

#### More info

More info at: 
- https://bower.io/
- http://blog.teamtreehouse.com/getting-started-bower


Json Server
-----------

```sh
$ npm install json-server -g
```

```sh
$ json-server --watch db.json
```

ngResource
-----------

```sh
$ bower install angular-resource -S
```

```sh
$ json-server --watch db.json
```


Setting up Ionic Frameowork
---------------------------

```sh
$ npm install cordova ionic -g
```
#### <i class="icon-plus"></i> Creating an Ionic Project

Go to a convenient location on your computer and create a folder named Ionic. Then move to that folder in the command window.
To scaffold out a new Ionic project, type the following at the command prompt:

```sh
$ ionic start conFusion sidemenu
```

Move to the conFusion folder and examine the contents.
To see the resulting project in your browser, type the following at the command prompt:

```sh
$ ionic serve
```

To see the resulting project as an IOS / Android in the browser:

```sh
$ ionic serve --lab
```

Cordova app
-------------

Installing Cordova
```sh
$ npm install -g cordova
```

Create the App
```sh
$ cordova create hello com.example.hello HelloWorld
```
Add platform
```sh
$ cd hello
$ cordova platform add android --save
$ cordova platform ls
```

Build the app:
```sh
$ cordova build
```

Test the app:
```sh
$ cordova emulate android
```

https://cordova.apache.org/docs/en/latest/guide/cli/

Splash Screen
-------------

```sh
$ ionic resources
```

Additional info
----------------

#### <i class="icon-help-circled"></i> Help for writing readme.md document

- List of supported StackEdit icons: https://stackedit.io/res/libs/fontello/demo.html
- StackEdit Live editor: https://stackedit.io/