import {
  PLATFORM
} from "aurelia-framework";

import {
  inject
} from 'aurelia-framework';

import {
  EventAggregator
} from 'aurelia-event-aggregator';


import {
  PostService
} from './common/services/post-service';

import {
  AuthService
} from './common/services/auth-service';


require('bootstrap/dist/css/bootstrap.min.css');
require('./assets/styles/blog.css');

@inject(EventAggregator, AuthService, PostService)
export class App {

  constructor(EventAggregator, AuthService, PostService) {
    this.ea = EventAggregator;
    this.postService = PostService;
    this.authService = AuthService;

  }

  attached() {
    this.currentUser = this.authService.currentUser;

    this.subscription = this.ea.subscribe('user', user => {
      this.currentUser = this.authService.currentUser;
    })

    this.updateSidebar();

    this.postSubscription = this.ea.subscribe('post-updated', updatedAt => {
      this.updateSidebar();
    })
  }

  updateSidebar() {
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
        route: 'login',
        name: 'login',
        moduleId: PLATFORM.moduleName('auth/login'),
        title: 'Log In'
      },

      {
        route: 'signup',
        name: 'signup',
        moduleId: PLATFORM.moduleName('auth/signup'),
        title: 'Sign Up'
      },

      {
        route: 'create-post',
        name: 'create-post',
        moduleId: PLATFORM.moduleName('posts/create'),
        title: 'Create Post'
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
      },


    ]);
  }

  detached() {
    this.subscription.dispose();
    this.postSubscription.dispose();
  }

  logout() {
    this.authService.logout().then(data => {
      console.log(data.success);
      this.ea.publish('user', null);
    }).catch(error => {
      this.error = error.message;
    })
  }

}
