import { IState } from '../../types';
import { buildCar } from './car';

const buildCars = (state: IState): Node => {
  const carsEl = <HTMLDivElement>document.createElement('div');
  carsEl.classList.add('garage-cars', 'cars');

  carsEl.append(...state.cars.map((car) => buildCar(state, car)));

  return carsEl;
};

export default buildCars;
