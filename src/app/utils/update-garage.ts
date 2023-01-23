import { IState } from '../types';
import { getCars } from '../api/api';
import { maxItemsPerGaragePage } from '../api/api';

const updateGarage = async (state: IState): Promise<void> => {
  const { items, count } = await getCars(state.carsPage);
  state.cars = items;
  state.carsCount = count;

  const prevButton = <HTMLButtonElement>document.querySelector('.prev-button');
  prevButton.disabled = state.carsPage <= 1;

  const nextButton = <HTMLButtonElement>document.querySelector('.next-button');
  nextButton.disabled = state.carsPage >= Number(state.carsCount) / maxItemsPerGaragePage;
};

export default updateGarage;
