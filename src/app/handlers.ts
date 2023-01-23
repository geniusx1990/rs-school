import { createCar, getCar, updateCar, deleteCar, deleteWinner, saveWinner } from './api/api';
import { IState, RaceStatus } from './types';
import startCar from './utils/start-car';
import stopCar from './utils/stop-car';
import race from './utils/racing/race';
import generateRandomCars from './utils/generate-cars';
import renderGarage from './renders/render-garage';
import updateGarage from './utils/update-garage';
import renderWinners from './renders/render-winners';
import updateWinners from './utils/update-winners';
import { setSort } from './utils/set-sort';
import { CarSpecs } from './types';

export const handleFormInput = (e: Event, state: IState): void => {
  const inputEl = e.target as HTMLInputElement;
  const [formName, elName] = inputEl.name.split('-');

  state.forms[formName].processState = 'filling';
  state.forms[formName][elName] = inputEl.value;
};

export const handleCreateFormSubmit = async (e: Event, state: IState): Promise<void> => {
  e.preventDefault();

  const nameEl = <HTMLInputElement>document.querySelector('#create-name');
  const colorEl = <HTMLInputElement>document.querySelector('#create-color');
  const car = { name: nameEl.value, color: colorEl.value };

  const raceButton = <HTMLButtonElement>document.querySelector('.race-button');
  raceButton.disabled = false;

  await createCar(car);
  await updateGarage(state);
  renderGarage(state);

  nameEl.value = '';
  colorEl.value = '#ffffff';

  state.forms.create.processState = 'idle';
  state.forms.create.name = '';
  state.forms.create.color = '#ffffff';
};

export const handleUpdateFormSubmit = async (e: Event, state: IState): Promise<void> => {
  e.preventDefault();

  const nameEl = <HTMLInputElement>document.querySelector('#update-name');
  const colorEl = <HTMLInputElement>document.querySelector('#update-color');
  const updateBtn = <HTMLButtonElement>document.querySelector('.update-button');
  const car = { name: nameEl.value, color: colorEl.value };

  if (state.selectedCar) await updateCar(state.selectedCar.id, car);
  await updateGarage(state);
  renderGarage(state);

  nameEl.value = '';
  colorEl.value = '#ffffff';
  nameEl.disabled = true;
  colorEl.disabled = true;
  updateBtn.disabled = true;

  state.forms.update.processState = 'idle';
  state.forms.update.name = '';
  state.forms.update.color = '#ffffff';
};

export const handleraceButtonClick = async (e: Event, state: IState): Promise<void> => {
  state.isRacing = true;

  const raceButton = e.target as HTMLButtonElement;
  raceButton.disabled = true;

  if (state.cars.length === 0) {
    return;
  }

  const winnersPageLink = <HTMLAnchorElement>document.querySelector('#winners-page');
  winnersPageLink.classList.add('disabled-link');

  const generateButton = <HTMLButtonElement>document.querySelector('.generate-button');
  generateButton.disabled = true;

  const resetButton = <HTMLButtonElement>document.querySelector('.reset-button');
  resetButton.disabled = false;

  const winner = await race(startCar, state);

  if (state.isRacing) {
    setTimeout(() => {
      console.log('winner name = ', winner.name);
      console.log('winner time = ', winner.time)
    }, );

    await saveWinner(winner);
  }

  state.isRacing = false;
};

export const handleresetButtonClick = async (e: Event, state: IState): Promise<void> => {
  state.isRacing = false;

  const resetButton = e.target as HTMLButtonElement;
  resetButton.disabled = true;

  state.cars.map((car) => stopCar(state, car.id));

  const raceButton = <HTMLButtonElement>document.querySelector('.race-button');
  raceButton.disabled = false;

  const winnersPageLink = <HTMLAnchorElement>document.querySelector('#winners-page');
  winnersPageLink.classList.remove('disabled-link');
};

export const handlegenerateButtonClick = async (e: Event, state: IState): Promise<void> => {
  const generateButton = e.target as HTMLButtonElement;
  generateButton.disabled = true;

  const raceButton = <HTMLButtonElement>document.querySelector('.race-button');
  raceButton.disabled = false;

  const cars = generateRandomCars();

  await Promise.all(cars.map(async (car) => createCar(car)));
  await updateGarage(state);
  renderGarage(state);

  generateButton.disabled = false;
};

export const handleselectButtonClick = async (e: Event, state: IState): Promise<void> => {
  const selectButton = e.target as HTMLButtonElement;
  const [, , id] = selectButton.id.split('-');

  const updateCarNameEl = <HTMLInputElement>document.querySelector('#update-name');
  const updateCarColorEl = <HTMLInputElement>document.querySelector('#update-color');
  const updateBtn = <HTMLButtonElement>document.querySelector('.update-button');

  state.selectedCar = await getCar(+id);

  updateCarNameEl.value = state.selectedCar.name;
  updateCarColorEl.value = state.selectedCar.color;
  updateCarNameEl.disabled = false;
  updateCarColorEl.disabled = false;
  updateBtn.disabled = false;

  state.forms.update.processState = 'filling';
  state.forms.update.name = state.selectedCar.name;
  state.forms.update.color = state.selectedCar.color;
};

export const handleremoveButtonClick = async (e: Event, state: IState): Promise<void> => {
  const removeButton = e.target as HTMLButtonElement;
  const [, , id] = removeButton.id.split('-');

  await deleteCar(+id);
  await deleteWinner(+id);
  await updateGarage(state);
  renderGarage(state);
};

export const handleStartBtnClick = (e: Event, state: IState): Promise<RaceStatus> => {
  const startBtn = e.target as HTMLButtonElement;
  const [, , id] = startBtn.id.split('-');

  return startCar(state, +id);
};

export const handleStopBtnClick = (e: Event, state: IState): Promise<void> => {
  const stopBtn = e.target as HTMLButtonElement;
  const [, , id] = stopBtn.id.split('-');

  return stopCar(state, +id);
};

export const handleSortBtnClick = (e: Event, state: IState): void => {
  const sortBtn = e.target as HTMLButtonElement;

  if (sortBtn.classList.contains('button-wins')) {
    setSort(state, 'wins');
  } else if (sortBtn.classList.contains('table-time')) {
    setSort(state, 'time');
  }
};

export const handleprevButtonClick = async (e: Event, state: IState): Promise<void> => {
  switch (state.activePage) {
    case 'garage-page': {
      state.carsPage -= 1;

      await updateGarage(state);
      renderGarage(state);
      break;
    }
    case 'winners-page': {
      state.winnersPage -= 1;

      await updateWinners(state);
      renderWinners(state);
      break;
    }
    default:
      throw new Error('invalid activePage value');
  }
};

export const handlenextButtonClick = async (e: Event, state: IState): Promise<void> => {
  switch (state.activePage) {
    case 'garage-page': {
      state.carsPage += 1;

      await updateGarage(state);
      renderGarage(state);
      break;
    }
    case 'winners-page': {
      state.winnersPage += 1;

      await updateWinners(state);
      renderWinners(state);
      break;
    }
    default:
      throw new Error('invalid activePage value');
  }
};
