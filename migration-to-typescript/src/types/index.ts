export interface NewsItem {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface SourceItem {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}
export interface INews {
    status: string;
    totalResults: number;
    articles: Array<NewsItem>;
}

export interface ISources {
    status: string;
    sources: Array<SourceItem>;
}

export type Callback<T> = (data: T) => void;