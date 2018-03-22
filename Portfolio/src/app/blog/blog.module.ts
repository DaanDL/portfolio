import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostCreateComponent } from './blog-post-create/blog-post-create.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { BlogPostEditComponent } from './blog-post-edit/blog-post-edit.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogPostCreateComponent, BlogPostDetailComponent, BlogPostEditComponent, BlogPostListComponent]
})
export class BlogModule { }
