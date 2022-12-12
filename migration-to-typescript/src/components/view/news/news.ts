import { NewsItem } from '../../../types';
import './news.css';

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            const newsClone = <HTMLDivElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');

            const photo = <HTMLDivElement>newsClone.querySelector('.news__meta-photo');
            photo.style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            const author = <HTMLLIElement>newsClone.querySelector('.news__meta-author');
            author.textContent = item.author || item.source.name;
            const meta = <HTMLLIElement>newsClone.querySelector('.news__meta-date');
            meta.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            const title = <HTMLHeadingElement>newsClone.querySelector('.news__description-title');
            title.textContent = item.title;
            const descriptionSource = <HTMLHeadingElement>newsClone.querySelector('.news__description-source');
            descriptionSource.textContent = item.source.name;
            const descriptionContent = <HTMLParagraphElement>newsClone.querySelector('.news__description-content');
            descriptionContent.textContent = item.description;
            const paragraph = <HTMLParagraphElement>newsClone.querySelector('.news__read-more a')
            paragraph.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsBlock = <HTMLDivElement>document.querySelector('.news');
        newsBlock.innerHTML = '';
        newsBlock.appendChild(fragment);
    }
}

export default News;
