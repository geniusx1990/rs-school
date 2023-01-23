import { IState } from '../types';
import createHeader from '../builders/header';
import buildPageContent from '../builders/page-content';

const renderPage = async (state: IState): Promise<void> => {
  const header = createHeader(state);
  const pageContent = await buildPageContent(state);

  document.body.innerHTML = '';
  document.body.append(header, pageContent);
};

export default renderPage;
