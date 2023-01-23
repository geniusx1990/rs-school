import { IState } from '../types';
import createTableHTML from '../builders/winners-container/html-for-table';
import { handleSortBtnClick } from '../handlers';
import updateWinners from '../utils/update-winners';

const renderWinners = async (state: IState): Promise<void> => {
  await updateWinners(state);

  const prevButton = <HTMLButtonElement>document.querySelector('.prev-button');
  prevButton.disabled = state.winnersPage <= 1;

  const nextButton = <HTMLButtonElement>document.querySelector('.next-button');
  nextButton.disabled = state.winnersPage * 10 >= Number(state.winnersCount);

  const winnersSectionEl = <HTMLElement>document.querySelector('.winners');
  winnersSectionEl.innerHTML = '';
  
  const winnerTitle = document.createElement('h2');
  winnerTitle.className = 'title';
  winnerTitle.textContent = `Winners ${state.winnersCount}`;

  const winnerPage = document.createElement('p');
  winnerPage.className = 'page-number';
  winnerPage.textContent = `page# ${state.winnersPage}`;

  winnersSectionEl.append(winnerTitle, winnerPage);


  const resultWin = <HTMLTableElement>document.createElement('table');
  resultWin.classList.add('table-winners', 'table');
  resultWin.innerHTML = resultWin.innerHTML = createTableHTML(state);
  resultWin.addEventListener('click', (e: Event) => handleSortBtnClick(e, state));

  winnersSectionEl.append(resultWin);
};

export default renderWinners;
