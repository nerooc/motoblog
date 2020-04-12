import {
  PLATFORM
} from "aurelia-framework";

import {
  inject
}
from 'aurelia-framework';

import {
  PostService
} from './common/services/post-service';

import {
  AuthService
} from './common/services/auth-service';


require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/blog.css');

@inject(AuthService, PostService)
export class App {

  constructor(AuthService, PostService) {
    this.postService = PostService;
    this.authService = AuthService;

  }

  attached() {
    this.currentUser = this.authService.currentUser;

    this.postService.allTags().then(data => {
      this.tags = data.tags;
    }).catch(error => {
      this.error = error.message;
    });

    this.postService.allArchives().then(data => {
      this.archives = data.archives;
    }).catch(error => {
      this.error = error.message;
    });
  }


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
      },

      {
        route: 'tag/:tag',
        name: 'tag-view',
        moduleId: PLATFORM.moduleName('posts/tag-view'),
        title: 'View Posts by Tag'
      },

      {
        route: 'archive/:archive',
        name: 'archive-view',
        moduleId: PLATFORM.moduleName('posts/archive-view'),
        title: 'View Posts by Archive'
      }
    ]);


  }

}
