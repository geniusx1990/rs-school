import { Car, IState } from '../../types';
import {
  handleselectButtonClick,
  handleremoveButtonClick,
  handleStartBtnClick,
  handleStopBtnClick,
} from '../../handlers';



export const buildCar = (state: IState, car: Car): Node => {

  const carContainer = <HTMLDivElement>document.createElement('div');
  carContainer.classList.add('cars-item', 'car');

  const carControlsEl = <HTMLDivElement>document.createElement('div');
  carControlsEl.classList.add('car-controls');

  const controlsContainer = <HTMLDivElement>document.createElement('div');
  controlsContainer.classList.add('controls-container');

  const selectButton = <HTMLButtonElement>document.createElement('button');
  selectButton.textContent = 'Select';
  selectButton.classList.add('button', 'select-button');
  selectButton.id = `select-car-${car.id}`;

  const removeButton = <HTMLButtonElement>document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('button', 'remove-button');
  removeButton.id = `remove-car-${car.id}`;

  const carNameEl = <HTMLParagraphElement>document.createElement('p');
  carNameEl.textContent = `${car.name}`;
  carNameEl.classList.add('car__name');

  const trackContainer = <HTMLDivElement>document.createElement('div');
  trackContainer.classList.add('track');

  const carInnerContainer = <HTMLDivElement>document.createElement('div');
  carInnerContainer.classList.add('car__inner-container');

  const engineContainer = <HTMLDivElement>document.createElement('div');
  engineContainer.classList.add('car__engine-controls', 'engine');

  const startButton = <HTMLButtonElement>document.createElement('button');
  startButton.textContent = 'A';
  startButton.classList.add('button', 'start-button');
  startButton.id = `start-car-${car.id}`;

  const engineStopButton = <HTMLButtonElement>document.createElement('button');
  engineStopButton.textContent = 'B';
  engineStopButton.classList.add('button', 'stop-button');
  engineStopButton.id = `stop-car-${car.id}`;
  engineStopButton.disabled = true;


  const carIcon = <HTMLDivElement>document.createElement('div');
  carIcon.classList.add('car_icon');
  carIcon.id = `car-${car.id}`;
  carIcon.style.color = `${car.color}`

  const carFinish = <HTMLDivElement>document.createElement('div');
  carFinish.classList.add('finish_icon');
  carFinish.id = `finish-${car.id}`;


  const carWrapper = document.createElement('div');
  carWrapper.className = 'car-wrapper'

  carWrapper.append(carIcon, carFinish);



  selectButton.addEventListener('click', (e: Event) => handleselectButtonClick(e, state));
  removeButton.addEventListener('click', (e: Event) => handleremoveButtonClick(e, state));
  startButton.addEventListener('click', (e: Event) => handleStartBtnClick(e, state));
  engineStopButton.addEventListener('click', (e: Event) => handleStopBtnClick(e, state));

  controlsContainer.append(selectButton, removeButton);
  carControlsEl.append(controlsContainer, carNameEl);
  engineContainer.append(startButton, engineStopButton);
  carInnerContainer.append(engineContainer);

  trackContainer.append(engineContainer, carWrapper);
  carContainer.append(carControlsEl, trackContainer);

  return carContainer;
};
