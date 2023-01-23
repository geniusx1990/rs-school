import { IState } from '../../types';
import createTableHTML from './html-for-table';
import { handleSortBtnClick } from '../../handlers';
import updateWinners from '../../utils/update-winners';

const buildWinnersSection = async (state: IState): Promise<Node> => {
  await updateWinners(state);

  const winnersSectionEl = <HTMLElement>document.createElement('section');
  winnersSectionEl.classList.add('winners-page', 'winners');

  const resultWin = <HTMLTableElement>document.createElement('table');
  resultWin.classList.add('table-winners', 'table');

  const winnerTitle = document.createElement('h2');
  winnerTitle.className = 'title';
  winnerTitle.textContent = `Winners ${state.winnersCount}`;

  const winnerPage = document.createElement('p');
  winnerPage.className = 'page-number';
  winnerPage.textContent = `page# ${state.winnersPage}`;

  winnersSectionEl.append(winnerTitle, winnerPage);


  resultWin.innerHTML = createTableHTML(state);
  resultWin.addEventListener('click', (e: Event) => handleSortBtnClick(e, state));

  winnersSectionEl.append(resultWin);

  return winnersSectionEl;
};

export default buildWinnersSection;
