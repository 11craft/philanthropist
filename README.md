## Introduction

[Philanthropist](http://thejakeharding.com/philanthropist/) is a browser extension that makes it easy to direct a portion of the money you spend on Amazon to your favorite projects and causes. All you need to do is tell Philanthropist who you'd like to support and assuming they're a member of the Amazon Associates program, they'll receive some kickback for every purchase you make.

## Preparing your development environment

Clone this repository.

Make sure you have a recent version of node.js installed.  For example, to install with homebrew on Mac OSX:

    $ brew install node

Use the [getting started instructions for Grunt](http://gruntjs.com/getting-started) to install `grunt-cli` globally, `grunt` locally within the top-level of this repository, and all dependencies used by grunt:

    $ npm install -g grunt-cli
    $ npm install grunt
    $ npm install

Compile `.less` files into `.css`, and repeat that automatically each time you make a change to a `.less` file:

    $ grunt less watch

## Installing as an unpacked extension

Browse to `chrome://extensions` in your browser. Click on the *Load unpacked extension...* button. Select the `prod` folder generated by grunt. The extension should appear at the top of your extensions list, showing the directory that Chrome is loading the extension from.
