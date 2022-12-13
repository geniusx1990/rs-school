import { INews, ISources, NewsItem, SourceItem } from '../../types';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INews): void {
        const values: NewsItem[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISources): void {
        const values: SourceItem[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
