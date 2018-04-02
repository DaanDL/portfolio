import { BlogPost } from '../models';
import { BlogPostService } from '../services';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blog-post-create',
  templateUrl: './blog-post-create.component.html',
  styleUrls: ['./blog-post-create.component.scss']
})
export class BlogPostCreateComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder, private blogPostService: BlogPostService) {
    // Construct the form for adding new blogposts
    this.form = fb.group({
      'title': ['', Validators.required],
      'content': ['', Validators.required]
    });
  }

  ngOnInit() {
    //
  }
  addPost({ value, valid }: { value: BlogPost, valid: boolean }) {
    this.blogPostService
      .CreateBlogPost(value)
      .subscribe();
  }

}
