import { BlogPost } from './models/blog-post.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blogposts: BlogPost[] = [
      this.createBlogPost('title 1', 'content 1', ['tag1', 'tag2']),
      this.createBlogPost('title 2', 'content 2', ['tag3', 'tag4'])
    ];
    return { blogposts };
  }

  private createBlogPost(title: string, content: string, tags: string[]): BlogPost {
    const post = new BlogPost();
    post.content = content;
    post.title = title;
    post.tags = tags;
    return post;
  }
}
