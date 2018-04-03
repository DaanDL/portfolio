import { PageFilter } from './../models/page-filter.model';
import { BlogPost } from './../models/blog-post.model';
import { Observable } from 'rxjs/Observable';
import { BlogPostService } from './../services/blog-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {
  blogPostList$: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService) { }

  ngOnInit() {
    const pageFilter: PageFilter = new PageFilter();
    this.blogPostList$ = this.blogPostService.ListBlogPosts(pageFilter);
  }

}
