import { IState } from '../types';
import buildCars from '../builders/garage-container/cars';

const renderGarage = (state: IState): void => {
  const garageSectionEl = <HTMLElement>document.querySelector('.garage');
  const carsEl = buildCars(state);

  garageSectionEl.innerHTML = '';

  const headerElement = document.createElement('h1');
  headerElement.className = 'garage-title'
  headerElement.textContent = `Garage ${state.carsCount}`

  const pageNumber = document.createElement('p');
  pageNumber.className = 'garage-count';
  pageNumber.textContent = `Page # ${state.carsPage}`

  garageSectionEl.append(headerElement, pageNumber, carsEl);
};

export default renderGarage;
