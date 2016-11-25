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

lessc Compiler
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

Grunt
----------------

Why use a task runner?

In one word: automation. The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc, the easier your job becomes. After you've configured it through a Gruntfile, a task runner can do most of that mundane work for you—and your team—with basically zero effort.

Why use Grunt?

The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built what you need, authoring and publishing your own Grunt plugin to npm is a breeze. See how to get started.

#### <i class="icon-plus"></i> Installing Grunt

> **Note:** You should already have Node and NPM installed on your computer before you proceed further. Also, those using OSX or Linux should use sudo while installing global packages in node (when you use the -g flag).

At the command prompt, type the following to install Grunt command-line interface (CLI):

```sh
$ npm install -g grunt-cli
```

#### <i class="icon-plus"></i> Installing Grunt in your project

```sh
$ npm install grunt --save-dev
```

This will install local per-project Grunt to use within your project.

#### <i class="icon-plus"></i> Configuring JSHint Task

The JSHint task validates our JavaScript code and points out errors and gives warnings about minor violations. To do this, you need to include some Grunt modules that help us with the tasks. Install the following modules by typing the following at the prompt:

```sh
$ npm install grunt-contrib-jshint --save-dev
$ npm install jshint-stylish --save-dev
$ npm install time-grunt --save-dev
$ npm install jit-grunt --save-dev
```
The first one installs the Grunt module for JSHint, and the second one adds further to print out the messages from JSHint in a better format. The time-grunt module generates time statistics about how much time each task consumes, and jit-grunt enables us to include the necessary downloaded Grunt modules when needed for the tasks.

#### <i class="icon-plus"></i> Copying files and cleaning up the Dist folder

Install the Grunt modules to copy over files to a distribution folder named dist, and clean up the dist folder when needed. To do this, install the following Grunt modules:

```sh
$ npm install grunt-contrib-copy --save-dev
$ npm install grunt-contrib-clean --save-dev
```

#### <i class="icon-plus"></i> Preparing the Distribution Folder and Files

We are now going to use the Grunt usemin module together with concat, cssmin, uglify and filerev to prepare the distribution folder. To do this, install the following Grunt modules:

```sh
$  npm install grunt-contrib-concat --save-dev
$ npm install grunt-contrib-cssmin --save-dev
$ npm install grunt-contrib-uglify --save-dev
$ npm install grunt-filerev --save-dev
$ npm install grunt-usemin --save-dev
```

#### <i class="icon-plus"></i> Watch, Connect and Serve Tasks

Use the Grunt modules watch, connect and watch, to spin up a web server and keep a watch on the files and automatically reload the browser when any of the watched files are updated. To do this, install the following grunt modules:

```sh
$ npm install grunt-contrib-watch --save-dev
$ npm install grunt-contrib-connect --save-dev
```

To run a server:

```sh
$ grunt serve
```

Gulp
----

#### <i class="icon-plus"></i> Installing Gulp global

> **Note:** You should already have Node and NPM installed on your computer before you proceed further. Also, those using OSX or Linux should use sudo while installing global packages in node (when you use the -g flag).

At the command prompt, type the following to install Gulp command-line interface (CLI) globally:

```sh
$ npm install -g gulp
```

This will install the Gulp globally so that you can use it in all projects.

#### <i class="icon-plus"></i> Installing Gulp in your project

Type the following at the prompt:

```sh
$ npm install gulp --save-dev
```

#### <i class="icon-plus"></i> Installing Gulp Plugins

```sh
$ npm install jshint gulp-jshint jshint-stylish gulp-imagemin gulp-concat gulp-uglify gulp-minify-css gulp-usemin gulp-cache gulp-changed gulp-rev gulp-rename gulp-notify  browser-sync del --save-dev
```


Json Server
-----------

```sh
$ npm install json-server -g
```

```sh
$  json-server --watch db.json
```

ngResource
-----------

```sh
$ bower install angular-resource -S
```

```sh
$  json-server --watch db.json
```


Additional info
----------------

#### <i class="icon-help-circled"></i> Help for writing readme.md document

- List of supported StackEdit icons: https://stackedit.io/res/libs/fontello/demo.html
- StackEdit Live editor: https://stackedit.io/