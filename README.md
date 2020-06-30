# `Aurelia.js - Proof of Concept`
------

The project is a simple automotive blog/news site, partly based on a bootstrap template that I modified and enhanced to meet the necessary conditions.

Created for "Web Application Technologies" conducted by Marek Konieczny at AGH UST. ​ 

![alt text](https://github.com/nerooc/Aurelia.js-PoC/blob/master/Presentation/Images/project.png)


Outside of the project scaffolding, it is built mostly with aurelia components that I explained thoroughly during my [presentation](https://github.com/nerooc/Aurelia.js-PoC/tree/master/Presentation). It also contains a simple javascript code made with promises, simulating the work that should be done by the back-end. It holds the entry posts, allows us to use specific functions to operate on them and supports a basic authorisation protocol. Because of the fact that back-end is faked, the site is not persistent and won't save any information after refresh. I may refactor the code to use localStorage in the future, so the functionality gets a bit better.​




------
This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/webpack

## Run dev app

Run `npm start`, then open `http://localhost:8080`

You can change the standard webpack configurations from CLI easily with something like this: `npm start -- --open --port 8888`. However, it is better to change the respective npm scripts or `webpack.config.js` with these options, as per your need.

To enable Webpack Bundle Analyzer, do `npm run analyze` (production build).

To enable hot module reload, do `npm start -- --hmr`.

To change dev server port, do `npm start -- --port 8888`.

To change dev server host, do `npm start -- --host 127.0.0.1`

**PS:** You could mix all the flags as well, `npm start -- --host 127.0.0.1 --port 7070 --open --hmr`

For long time aurelia-cli user, you can still use `au run` with those arguments like `au run --env prod --open --hmr`. But `au run` now simply executes `npm start` command.

## Build for production

Run `npm run build`, or the old way `au build --env prod`.
