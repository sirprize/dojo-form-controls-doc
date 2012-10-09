# dijitive-website-generator

Static website generator infrastructure for the dijitive project - [http://sirprize.github.com/dijitive](http://sirprize.github.com/dijitive)

## Information

While the purpose of this project is the generation of the dijitive website, its structure and workflow is well suited for any static Dojo-based website.

## Getting Started

+ `git clone https://github.com/sirprize/dijitive-website-generator`
+ `cd dijitive-website-generator`
+ `git submodule init`
+ `git submodule update`
+ `cd bin/deploy`
+ `phing`

## Workflow

Generating the static project website is a 3-step process:

### 1. Developing The Website

These are the steps involved during website development:

1. `cd bin/dev`
1. `jekyll --auto`

Point browser to `_development/` and browse the website. Make corrections in `html/` and `assets/` until everything is as desired. Whenever you save a file in `html/`, jekyll regenerates the website into `_development`.

### 2. Creating The Production Build

Execute those steps when you are satisfied with the website. The production build workflow uses a slightly different jekyll configuration and optimizes asset files (Javascript and CSS).

1. `cd bin/prod`
1. `./assets.sh`
1. `jekyll`

Point your browser to `_production/` to browse the production build.

### 3. Creating The Deployment Build

In these steps we will collect all the required files, make some last modifications and copy everything to `_deploy/`:

1. `cd bin/deploy`
1. `phing`
1. Copy contents of `_deploy/` to `gh-pages` branch of your project

Running `phing` in `_deploy/` completely regenerates the develpment-, production- and deployment builds.

## Structure

All the root dirs starting with an underscore contain generated files - do not edit in those places!

    + _assets (javascript/css production build)
    + _deploy (final website)
    + _development (destination dir for jekyll development build)
    + _production (destination dir for jekyll production build)
    + assets
        + scripts
        + styles
        + vendor
    + bin
        + dev (commands for use during development)
        + prod (commands to generate the production build)
        + deploy (command to generate the deployment build)
    + html (jekyll source dir)
        + index.html

## Dependencies

+ [dojo/dojo](http://github.com/dojo/dojo)
+ [dojo/dijit](http://github.com/dojo/dijit)
+ [dojo/util](http://github.com/dojo/util)
+ [twitter/bootstrap](http://github.com/twitter/bootstrap.git)
+ [xsokev/Dojo-Bootstrap](http://github.com/xsokev/Dojo-Bootstrap)
+ [sirprize/dijitive](http://github.com/sirprize/dijitive.git)

## Requirements

+ [jekyll](https://github.com/mojombo/jekyll)
+ [phing](http://www.phing.info/)