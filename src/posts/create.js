import {
  inject
} from 'aurelia-framework';

import {
  Router
} from 'aurelia-router';

import {
  PostService
} from '../common/services/post-service';

@inject(Router, PostService)

export class Create {
  constructor(Router, PostService) {
    this.router = Router;
    this.postService = PostService;
  }

  createPost() {
    this.postService.create(this.post).then(data => {
      this.router.navigateToRoute('post-view', {
        slug: data.slug
      });
    }).catch(error => {
      console.log(error);
    });
  }

}
