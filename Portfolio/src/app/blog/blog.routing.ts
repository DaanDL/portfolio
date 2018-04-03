import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostCreateComponent } from './blog-post-create/blog-post-create.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogPostCreateComponent
  },
  {
    path: 'blog/list',
    component: BlogPostListComponent
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
