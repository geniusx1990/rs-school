import { IState } from '../types';
import renderPage from '../renders/render-page';
import '../../../main.css'

const createHeader = (state: IState): Node => {
  const { activePage } = state;

  const headerElement = <HTMLElement>document.createElement('header');
  const headerContainer = <HTMLDivElement>document.createElement('div');
  const headerNav = <HTMLElement>document.createElement('nav');

  const headerWrapper = <HTMLDivElement>document.createElement('div');
  headerWrapper.classList.add('header-wrapper');


  const garagePageLink = <HTMLAnchorElement>document.createElement('a');
  const winnersPageLink = <HTMLAnchorElement>document.createElement('a');


  headerElement.classList.add('header');
  headerContainer.classList.add('header-container');
  headerNav.classList.add('navigation');



  garagePageLink.classList.add('links');
  garagePageLink.setAttribute('id', 'garage-page');
  garagePageLink.setAttribute('href', '#');
  garagePageLink.textContent = 'Garage';

  winnersPageLink.classList.add('links');
  winnersPageLink.setAttribute('id', 'winners-page');
  winnersPageLink.setAttribute('href', '#');
  winnersPageLink.textContent = 'Winners';

  const pageLinks = [garagePageLink, winnersPageLink];

  pageLinks.forEach((link) => {
    if (activePage === link.getAttribute('id')) {
      link.classList.add('active-page');
    }

    link.addEventListener('click', (e: Event): void => {
      e.preventDefault();
      const curPage = e.target as HTMLElement;
      const pageId = String(curPage.getAttribute('id'));
      if (activePage === pageId) return;

      pageLinks.forEach((item) => item.classList.remove('active-page'));
      curPage.classList.add('active-page');

      state.activePage = pageId;

      renderPage(state);
    });
  });

  headerNav.append(...pageLinks);
  headerContainer.append(headerWrapper, headerNav);
  headerElement.append(headerContainer);

  return headerElement;
};

export default createHeader;
