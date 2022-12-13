import { SourceItem } from '../../../types';
import './sources.css';

class Sources {
    draw(data: Array<SourceItem>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item: SourceItem) => {
            const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            const sourceItemName = <HTMLElement>sourceClone.querySelector('.source__item-name');
            sourceItemName.textContent = item.name;
            const sourceItem = <HTMLElement>sourceClone.querySelector('.source__item');
            sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const sources = <HTMLElement>document.querySelector('.sources');
        sources.append(fragment);
    }
}

export default Sources;
