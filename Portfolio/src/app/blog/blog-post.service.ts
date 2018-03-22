import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BlogPost, PageFilter } from './models';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogPostService {
  private readonly endpoint = '/blog-post';

  constructor(private http: HttpClient) { }

  /**
   * Lists Blog Posts by updated date ascending
   */
  public ListBlogPosts(filter: PageFilter): Observable<BlogPost[]> {
    const data: any = filter;
    return this.http.get<BlogPost[]>(this.endpoint, { params: data });
  }

  /**
   * Creates blog post
   */
  public CreateBlogPost() {

  }
}
