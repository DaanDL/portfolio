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
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
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
