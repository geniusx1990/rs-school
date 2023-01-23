import { IState } from '../../types';
import buildCars from './cars';

const buildGarageSection = (state: IState): Node => {
  const garageSectionEl = <HTMLElement>document.createElement('section');
  garageSectionEl.classList.add('garage-page', 'garage');

  const headerElement = document.createElement('h1');
  headerElement.className = 'garage-title'
  headerElement.textContent = `Garage ${state.carsCount}`

  const pageNumber = document.createElement('p');
  pageNumber.className = 'garage-count';
  pageNumber.textContent = `Page # ${state.carsPage}`

  garageSectionEl.append(headerElement, pageNumber);
  garageSectionEl.append(buildCars(state));

  return garageSectionEl;
};

export default buildGarageSection;
