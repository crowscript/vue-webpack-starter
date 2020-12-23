
# Vue JS and Webpack starter
---
Basic Vue JS and Webpack starter for starting new website project.

## Next step of developing
- Export html to dist
- Better global css
- ReadMe file clean
- Post CSS
- Separate webpack file to dev and prod

## Table of Contents
---
- [Vue JS and Webpack starter](#vue-js-and-webpack-starter)
- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Status](#status)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Built With](#built-with)
  - [Requirements](#requirements)
    - [How install Requirements](#how-install-requirements)
  - [Dependencies](#dependencies)
    - [How install Dependencies](#how-install-dependencies)
- [How to Use](#how-to-use)
  - [How to add a new page](#how-to-add-a-new-page)
  - [webpack.config.js](#webpackconfigjs)
  - [.gitignore](#gitignore)
  - [Git commands](#git-commands)
    - [Push changes to a Git repository](#push-changes-to-a-git-repository)
  - [VueJS](#vuejs)
  - [HTML5 Boilerplate](#html5-boilerplate)
  - [Sass](#sass)
  - [Netlify](#netlify)
  - [github](#github)
  - [editorconfig](#editorconfig)
- [Changelog](#changelog)
- [License](#license)

## About the Project
---
This project is based on Vue js, custom css (sass) and Webpack 4 as a module bundler.


## Status
---
![node](https://img.shields.io/node/v/webpack.svg)
![npm](https://img.shields.io/npm/v/webpack.svg)  ![build](https://img.shields.io/travis/webpack/webpack/master.svg)
![vuejs](https://img.shields.io/badge/vuejs-v2.5.11-green.svg)
![webpack](https://img.shields.io/badge/Webpack-v3.6.0-blue.svg)
![html](https://img.shields.io/badge/HTML-v5-orange.svg)
![sass](https://img.shields.io/badge/SASS-v3.7.3-pink.svg)
![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)


## Directory Structure
---
```
┌── dist
│   ├── assets
│   │   └── // fonts
│   ├── build.js
│   └── build.js.map
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   │   └── custom.js
│   │   └── scss
│   │       └── abstracts
│   │       │   ├── functions.scss
│   │       │   ├── mixins.scss
│   │       │   ├── variables.scss
│   │       │   └── index.scss
│   │       └── base
│   │       │   ├── animations.scss
│   │       │   ├── base.scss
│   │       │   ├── fonts.scss
│   │       │   ├── global.scss
│   │       │   ├── placeholders.scss
│   │       │   ├── prints.scss
│   │       │   ├── typography.scss
│   │       │   ├── utility.scss
│   │       │   └── index.scss
│   │       └── components
│   │       │   └── index.scss
│   │       └── layout
│   │       │   ├── footer.scss
│   │       │   ├── grid.scss
│   │       │   ├── header.scss
│   │       │   ├── nav.scss
│   │       │   └── index.scss
│   │       └── pages
│   │       │   └── index.scss
│   │       └── themes
│   │       │   ├── dark.scss
│   │       │   └── index.scss
│   │       └── vendors
│   │       │   ├── normalize.scss
│   │       │   └── index.scss
│   │       └── main.scss
│   ├── components
│   │   ├── About.vue
│   │   ├── AppFooter.vue
│   │   ├── Appheader.vue
│   │   └── home.vue
│   ├── router
│   │   ├── index.js
│   ├── App.vue
│   └── main.js
├── .babelrc
├── .editorconfig
├── .gitignore
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
├── README.md
└── webpack.config.js

```

## Getting Started
---
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

- If needed, [install](http://blog.nodeknockout.com/post/65463770933/how-to-install-node-js-and-npm) `node` and `npm` (Node Package Manager).
- Clone this repo with `git clone https://gitlab.com/crowscript/crowscript.git` or download the zip. For this step, use npm terminal.
- In terminal, `cd` to the folder containing your project. Alternatively, you can type `cd ` and drag the location of the folder into your terminal and hit enter.
- In terminal, type `npm install`. If (and _only_ if) `npm install` isn't working, try `sudo npm install`. This should install all [dependencies](#dependencies).
- In terminal, `npm run dev` for server start (server itself won't to make dist folder, but all changes is visiable in browser) or/and enter `npm run build` to make dist folder.
- If Browser is not opened automaticly, please open in your browser this link `http://localhost:8080/`.!
- Edit your code inside of the `src` folder.
- When you want to stop the webpack server, hit `ctrl + C`.


## Built With
---

- [Webpack](https://webpack.js.org/)
- [Vue JS](https://vuejs.org/)
- [SASS](https://sass-lang.com/)


### Requirements
What things you need to install the software and how to install them:

- Node/NPM

#### How install Requirements
How to install the requirements.

`npm install`

**tl;dr**: [Download Crowscript website](https://gitlab.com/crowscript/crowscript.git), run `npm install` in that directory and `npm run dev`.

### Dependencies
Dependencies that need to be installed for building/using your project
```
   "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-env": "^1.6.0",
    "babel-preset-stage-3": "^6.24.1",
    "cross-env": "^5.0.5",
    "css-loader": "^0.28.7",
    "file-loader": "^1.1.4",
    "node-sass": "^4.5.3",
    "sass-loader": "^6.0.6",
    "vue-loader": "^13.0.5",
    "vue-template-compiler": "^2.4.4",
    "webpack": "^3.6.0",
    "webpack-dev-server": "^2.9.1"
  },
  "dependencies": {
    "vue": "^2.5.11",
    "vue-router": "^3.4.9"
  }
```
#### How install Dependencies
All dependencies are will be installed with:
`
npm install
`

## How to Use
---
Open in your favorite code editor folder **crowscript** and start editing files in `src` folder.
If you want to change something in Webpack

### How to add a new page
In directory `components` create vue template page, and inside `router/index.js` add `import NewPage from '../components/NewPage.vue';` and add in same file new routes
```
{
      path: '/NewPage',
      component: NewPage,
      name: 'NewPage'
    }
```

### webpack.config.js
Here is setup of Webpack. So please before change it, read the documentation of webpack [HERE](https://webpack.js.org/guides)

### .gitignore
`.gitignore` should primarily be used to avoid certain project-level files and directories from
being kept under source control. Different development-environments will benefit from different collections of ignores.

### Git commands
#### Push changes to a Git repository
- Create your new files or edit existing files in `src` project directory.
- From the command line, enter `git status` so that you can check changes.
- Enter `git add .` at the command line to add the files or changes to the repository.

- Enter `git commit -m 'commit_message'` at the command line to commit new files/changes to the local repository. For the `commit_message` , you can enter anything that describes the changes you are committing.
- Enter `git push`  at the command line to copy your files from your local repository to remote repository (Github, Bitbucket etc).
- If prompted for authentication, enter your password.

### VueJS
How to use Vue JS:
- [Vuejs Documentation](https://vuejs.org/v2/guide/)

### HTML5 Boilerplate
[HTML5 Boilerplate](https://html5boilerplate.com/)

### Sass
[Sass](https://sass-lang.com/)
[Sass Guideline](https://sass-guidelin.es/#architecture)

### Netlify
[netlify](https://www.netlify.com/)

### Github
[github](https://github.com/features)

### editorconfig
[editorconfig](https://editorconfig.org/)

## Changelog

**v4.0**
  - https://crowscript.com/ (2020)

**v3.0**
  - https://web.archive.org/web/20190823064446/http://crowscript.com/ (2017)

**v2.0**
  - https://web.archive.org/web/20151113175401/http://www.vranic.info/ (2015)

**v1.0**
  - https://web.archive.org/web/20141218153240/http://vranic.info/ (2014)

## Authors
---
* **Stanislav Vranic** - *Frontend Developer* - [@crowscript](http://crowscript.com)

## License
---
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

**[Back to top](#table-of-contents)**
