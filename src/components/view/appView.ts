import News from './news/news';
import Sources from './sources/sources';

import { NewsCard, Info, ShowNews, ShowSource } from '../../interface';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ShowNews) {
        const values: Array<NewsCard> = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ShowSource) {
        const values: Array<Info> = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
