import Page from "../../components/page";

class Garage extends Page {

    constructor(id: string) {
        super(id);
    }

    private renderHeaderTop() {
        const headerWrapper = document.createElement('div');
        headerWrapper.className = 'control-wrapper';

        const createWrapper = document.createElement('div');
        createWrapper.className = 'create';
        
        const carNameInput = document.createElement('input');
        carNameInput.className = 'create-name'
        carNameInput.placeholder = 'Enter name';

        const colorInput = document.createElement('input');
        colorInput.className = 'color-input'
        colorInput.type = 'color';

        const createCarButton = document.createElement('button');
        createCarButton.className = 'create-button';
        createCarButton.textContent = 'Create'

        createWrapper.append(carNameInput, colorInput, createCarButton)



        const updateWrapper = document.createElement('div');
        updateWrapper.className = 'update';
        
        const carNameInputUpdate = document.createElement('input');
        carNameInputUpdate.className = 'update-name'
        carNameInputUpdate.placeholder = 'Enter name';

        const colorInputUpdate = document.createElement('input');
        colorInputUpdate.className = 'update-color-input'
        colorInputUpdate.type = 'color';

        const updateCarButton = document.createElement('button');
        updateCarButton.className = 'update-button';
        updateCarButton.textContent = 'Update'

        updateWrapper.append(carNameInputUpdate, colorInputUpdate, updateCarButton)


        const controlWrapper = document.createElement('div');
        controlWrapper.className = 'control';


        const raceButton = document.createElement('button');
        raceButton.className = 'race-button';
        raceButton.textContent = 'RACE'

        const resetButton = document.createElement('button');
        resetButton.className = 'reset-button';
        resetButton.textContent = 'RESET'

        const generateCars = document.createElement('button');
        generateCars.className = 'generate-button';
        generateCars.textContent = 'Generate Cars';

        controlWrapper.append(raceButton, resetButton, generateCars)



        headerWrapper.append(createWrapper);
        headerWrapper.append(updateWrapper);
        headerWrapper.append(controlWrapper);

        return headerWrapper;

    }



    render() {
        const title = this.createHeaderTitle('Garage Page')
        const headerAdd = this.renderHeaderTop();
        this.container.append(headerAdd);
        this.container.append(title);
        return this.container
    }
 }

 export default Garage;