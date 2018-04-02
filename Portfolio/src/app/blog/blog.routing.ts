import { BlogPostCreateComponent } from './blog-post-create/blog-post-create.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: BlogPostCreateComponent
  }
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
