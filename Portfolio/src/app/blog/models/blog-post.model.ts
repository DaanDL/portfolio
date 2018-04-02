export class BlogPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  dateAdded: Date;
  dateUpdated: Date;

  constructor() {
    this.dateAdded = new Date();
    this.dateUpdated = new Date();
  }
}
