import {
  inject
} from 'aurelia-framework';

import {
  Router
} from 'aurelia-router';

import {
  EventAggregator
} from 'aurelia-event-aggregator';

import {
  PostService
} from '../common/services/post-service';

@inject(EventAggregator, Router, PostService)

export class Create {
  constructor(EventAggregator, Router, PostService) {
    this.router = Router;
    this.postService = PostService;
    this.ea = EventAggregator;
  }

  attached() {
    this.post = {
      title: '',
      body: '',
      tags: []
    };
    this.postService.allTags().then(data => {
      this.allTags = data.tags;
    }).catch(error => {
      console.log(error);
    })
  }

  addTag() {
    this.allTags.push(this.newTag);
    this.post.tags.push(this.newTag);
    this.newTag = "";
  }

  createPost() {
    this.postService.create(this.post).then(data => {
      this.ea.publish('post-updated', Date());
      this.router.navigateToRoute('post-view', {
        slug: data.slug
      });
    }).catch(error => {
      console.log(error);
    });
  }

}
