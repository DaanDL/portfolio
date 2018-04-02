import { BlogPostService } from './services/blog-post.service';
import { ModuleRouting } from './blog.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogPostCreateComponent } from './blog-post-create/blog-post-create.component';
import { BlogPostDetailComponent } from './blog-post-detail/blog-post-detail.component';
import { BlogPostEditComponent } from './blog-post-edit/blog-post-edit.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModuleRouting
  ],
  declarations: [
    BlogPostCreateComponent,
    BlogPostDetailComponent,
    BlogPostEditComponent,
    BlogPostListComponent],
  providers: [BlogPostService]
})
export class BlogModule { }
