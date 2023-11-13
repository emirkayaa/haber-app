export class HaberList {
    author!: string;
    content: string | null = null;
    description: string | null = null;
    publishedAt!: string;
    source: { id: string; name: string } = { id: '', name: '' };
    title!: string;
    url!: string;
    articles: Array<any> = [];
    urlToImage: string | null = null;
  }