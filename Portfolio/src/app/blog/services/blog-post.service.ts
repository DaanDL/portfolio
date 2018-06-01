import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BlogPost, PageFilter } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class BlogPostService {
  private readonly endpoint = 'api/blogposts';

  constructor(private http: HttpClient) { }

  /**
   * Lists Blog Posts by updated date ascending
   */
  public ListBlogPosts(filter: PageFilter): Observable<BlogPost[]> {
    const data: any = filter;
    // return this.http.get<BlogPost[]>(this.endpoint, { params: data });
    return this.http.get<any[]>(this.endpoint);
  }

  /**
   * Creates Blog Post, returns id for created Blog Post
   */
  public CreateBlogPost(item: BlogPost): Observable<string> {
    return this.http.post<string>(this.endpoint, item);
  }

  /**
   * Updates Blog Post
   */
  public UpdateBlogPost(item: BlogPost): Observable<string> {
    return this.http.patch<string>(this.endpoint, item);
  }

  /**
   * DeleteBlogPost
   */
  public DeleteBlogPost(id: string) {
    return this.http.delete(this.endpoint, { params: { id: id } });
  }
}
