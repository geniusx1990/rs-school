import { IState } from '../../types';
import buildGarageSection from '../../builders/garage-container/garage-section';
import buildGaragePagination from '../../builders/garage-pagination';
import { handleCreateFormSubmit, handleFormInput, handlegenerateButtonClick, handleraceButtonClick, handleresetButtonClick, handleUpdateFormSubmit } from '../../handlers';


const renderCreateForm = (state: IState): Node => {
  const formElement = <HTMLFormElement>document.createElement('form');
  formElement.classList.add('controls__form', 'create-form');

  formElement.innerHTML = `
    <label class="create-form__label" for="create-name">Enter name</label>
    <input class="create-form-input" type="text" id="create-name" name="create-name" value="${state.forms.create.name}" required>
    <input class="create-form-input" type="color" id="create-color" name="create-color" value="${state.forms.create.color}">
    <button class="button create-button" type="submit">Create</button>  
  `;

  formElement.addEventListener('change', (e: Event) => handleFormInput(e, state));
  formElement.addEventListener('submit', (e: Event) => handleCreateFormSubmit(e, state));

  return formElement;
};

const renderUpdateForm = (state: IState): Node => {
  const formElement = <HTMLFormElement>document.createElement('form');
  formElement.classList.add('controls__form', 'update-form');

  formElement.innerHTML = `
    <label class="update-form-label" for="update-name">Update name</label>
    <input class="update-form-input" type="text" id="update-name" name="update-name" value="${state.forms.update.name}"  
    required  ${state.forms.update.processState === 'idle' ? 'disabled' : ''}>
    <input class="update-form-input update-form-input--color" type="color" id="update-color" name="update-color" value="${state.forms.update.color}" 
    ${state.forms.update.processState === 'idle' ? 'disabled' : ''}> <button class="button update-button" type="submit" ${state.forms.update.processState === 'idle' ? 'disabled' : ''}>Update</button>
  `;

  formElement.addEventListener('change', (e: Event) => handleFormInput(e, state));
  formElement.addEventListener('submit', (e: Event) => handleUpdateFormSubmit(e, state));

  return formElement;
};


const renderControlsButtons = (state: IState): Node => {
  const container = <HTMLDivElement>document.createElement('div');
  container.classList.add('congtol-wrapper');

  const raceButton = <HTMLButtonElement>document.createElement('button');
  raceButton.classList.add('button', 'race-button');
  raceButton.textContent = 'Race';

  const resetButton = <HTMLButtonElement>document.createElement('button');
  resetButton.classList.add('button', 'reset-button');
  resetButton.textContent = 'Reset';
  resetButton.disabled = true;

  const generateButton = <HTMLButtonElement>document.createElement('button');
  generateButton.classList.add('button', 'generate-button');
  generateButton.textContent = 'Generate';

  raceButton.addEventListener('click', (e: Event) => handleraceButtonClick(e, state));
  resetButton.addEventListener('click', (e: Event) => handleresetButtonClick(e, state));
  generateButton.addEventListener('click', (e: Event) => handlegenerateButtonClick(e, state));


  container.append(raceButton, resetButton, generateButton)

  return container;
};



const renderControlsContainer = (state: IState): Node => {
  const controlsSectionEl = <HTMLElement>document.createElement('section');
  controlsSectionEl.classList.add('controls', 'controls');

  const controlsContainer = <HTMLDivElement>document.createElement('div');
  controlsContainer.classList.add('controls-container');
  controlsContainer.append(renderCreateForm(state), renderUpdateForm(state), renderControlsButtons(state));

  controlsSectionEl.append(controlsContainer);

  return controlsSectionEl;
};


const renderGaragePageContent = (state: IState): HTMLElement => {
  const pageContainer = <HTMLDivElement>document.createElement('div');
  pageContainer.classList.add('page-container');
  pageContainer.append(renderControlsContainer(state), buildGarageSection(state), buildGaragePagination(state));

  return pageContainer;
};

export default renderGaragePageContent;
