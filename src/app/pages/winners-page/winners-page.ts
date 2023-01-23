import { IState } from '../../types';
import buildWinnersSection from '../../builders/winners-container/winners-section';
import winnerPagination from '../../builders/winners-pagination';

const buildWinnersPageContent = async (state: IState): Promise<HTMLElement> => {
  const pageContainer = <HTMLDivElement>document.createElement('div');
  pageContainer.classList.add('page-container');
  pageContainer.append(await buildWinnersSection(state), winnerPagination(state));

  return pageContainer;
};

export default buildWinnersPageContent;
