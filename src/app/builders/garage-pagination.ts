import { IState } from '../types';
import { handleprevButtonClick, handlenextButtonClick } from '../handlers';
import { maxItemsPerGaragePage } from '../api/api';

const buildGaragePagination = (state: IState): Node => {
  const paginationEl = <HTMLDivElement>document.createElement('div');
  paginationEl.classList.add('garage-pagination');

  const prevButton = <HTMLButtonElement>document.createElement('button');
  prevButton.classList.add('button', 'prev-button');
  prevButton.innerHTML = `<span>Prev</span>`;
  prevButton.disabled = state.carsPage === 1;

  const nextButton = <HTMLButtonElement>document.createElement('button');
  nextButton.classList.add('button', 'next-button');
  nextButton.innerHTML = `<span>Next</span>`;
  nextButton.disabled = state.carsPage >= Number(state.carsCount) / maxItemsPerGaragePage;

  prevButton.addEventListener('click', (e: Event) => handleprevButtonClick(e, state));
  nextButton.addEventListener('click', (e: Event) => handlenextButtonClick(e, state));

  paginationEl.append(prevButton, nextButton);

  return paginationEl;
};

export default buildGaragePagination;
