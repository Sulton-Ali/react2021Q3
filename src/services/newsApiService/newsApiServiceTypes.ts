export type Error = {
  status: string;
  code: string;
  message: string;
};

type ResponseSource = {
  id: string;
  name: string;
};

export type Article = {
  source: ResponseSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Response = {
  status: string;
  totalResults: number;
  articles: Article[];
};
