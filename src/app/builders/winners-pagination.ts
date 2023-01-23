import { IState } from '../types';
import { handleprevButtonClick, handlenextButtonClick } from '../handlers';
import { maxItemsPerWinnersPage } from '../api/api';

const winnerPagination = (state: IState): Node => {
  const paginationEl = <HTMLDivElement>document.createElement('div');
  paginationEl.classList.add('page-pagination');

  const prevButton = <HTMLButtonElement>document.createElement('button');
  prevButton.classList.add('button', 'prev-button');
  prevButton.innerHTML = `<span>Prev</span>`;
  prevButton.disabled = state.winnersPage === 1;

  const nextButton = <HTMLButtonElement>document.createElement('button');
  nextButton.classList.add('button', 'next-button');
  nextButton.innerHTML = `<span>Next</span>`;

  nextButton.disabled = state.winnersPage >= Number(state.winnersCount) / maxItemsPerWinnersPage;

  prevButton.addEventListener('click', (e: Event) => handleprevButtonClick(e, state));
  nextButton.addEventListener('click', (e: Event) => handlenextButtonClick(e, state));

  paginationEl.append(prevButton, nextButton);

  return paginationEl;
};

export default winnerPagination;
