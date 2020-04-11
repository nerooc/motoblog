import {
  PLATFORM
} from "aurelia-framework";

require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/blog.css');


export class App {

  message = 'Hello World!';


  configureRouter(config, router) {
    config.title = 'MotoBlog';
    config.map([{
        route: '',
        name: 'home',
        moduleId: PLATFORM.moduleName('posts/index'),
        title: 'All Posts'
      },

      {
        route: 'post/:slug',
        name: 'post-view',
        moduleId: PLATFORM.moduleName('posts/view'),
        title: 'View Post'
      }
    ]);


  }

}
