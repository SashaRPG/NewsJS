interface Info {
    url: string;
    name: string;
    id: string;
    language: string;
    description: string;
    country: string;
    category: string;
}

interface Source {
    readonly id: string;
    name: string;
}

interface NewsCard {
    url: string;
    urlToImage: string;
    title: string;
    source: Source;
    publishedAt: string;
    description: string;
    author: string;
    content: string;
}

interface ShowSource {
    status: string;
    sources?: Array<Info>;
}

interface ShowNews {
    status: string;
    total?: number;
    articles?: Array<News>;
}

interface Options {
    sources?: string;
}

interface ResponseObj {
    endpoint: string;
    options?: Options;
}

export { Info, News, ShowNews, ShowSource, Options, ResponseObj };