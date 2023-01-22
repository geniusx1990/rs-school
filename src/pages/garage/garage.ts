import Page from "../../components/page";
//import Car from "../../components/car/car";
import requests from "../../api/requests";
import { Car } from "../../interfaces/interfaces";
class Garage extends Page {

    constructor(id: string) {
        super(id);
    }

    public renderHeaderTop() {
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



    getCar() {
        const baseUrl = 'http://localhost:3000';
        const garage = `${baseUrl}/garage`;
        const engine = `${baseUrl}/engine`;
        const winners = `${baseUrl}/winners`;



        const gameWrapper = document.createElement('div');
        gameWrapper.className = 'game-wrapper';


        fetch(garage)
            .then((resp) => resp.json())
            .then(function (data) {
                console.log(data)
                data.forEach((element: any) => {
                    const carWrapper = document.createElement('div')
                    carWrapper.className = 'car-wrapper';

                    const carControlWrapper = document.createElement('div');
                    carControlWrapper.className = 'car-control-wrapper';

                    const selectButton = document.createElement('button');
                    selectButton.className = 'select-button';
                    selectButton.textContent = 'SELECT';
                    carControlWrapper.append(selectButton);

                    selectButton.addEventListener('click', () => {
                        console.log(element.name);
                        console.log(element.id);
                        console.log(element.color)
                      /*   let carData : Car[] = JSON.parse(localStorage.idCars);
                        console.log()
                        let test = carData.push(element.id)
                        localStorage.idCars = JSON.stringify(test) */
                        //requests.updateCar({name: element.name, color: element.color}, element.id)

                        
                    })


                    const removeButton = document.createElement('button');
                    removeButton.className = 'remove-button';
                    removeButton.textContent = 'REMOVE';

                    removeButton.addEventListener('click', () => {

                        console.log(element.id)
                        requests.deleteCar(element.id)
                        location.reload()
                    })




                    carControlWrapper.append(removeButton);

                    const controlButtons = document.createElement('div');
                    controlButtons.className = 'control-buttons';


                    const aButton = document.createElement('button');
                    aButton.className = 'a-button';
                    aButton.textContent = 'A';
                    controlButtons.append(aButton);

                    const bButton = document.createElement('button');
                    bButton.className = 'b-button';
                    bButton.textContent = 'B';
                    controlButtons.append(bButton);


                    const nameCar = document.createElement('h3');
                    nameCar.className = 'car-name';
                    nameCar.innerText = element.name;
                    carControlWrapper.append(nameCar);

                    const carImage = document.createElement('div');
                    carImage.className = 'car__icon';
                    carImage.style.color = element.color;

                    const trackWrapper = document.createElement('div');
                    trackWrapper.className = 'track-wrapper';

                    const finishIcon = document.createElement('div');
                    finishIcon.className = 'finish__icon';




                    trackWrapper.append(carImage);
                    trackWrapper.append(finishIcon)

                    carWrapper.append(carControlWrapper);
                    carWrapper.append(controlButtons);
                    carWrapper.append(trackWrapper);
                    gameWrapper.append(carWrapper)
                    console.log(element.name)

                });
            })



        return gameWrapper;

    }






    render() {
        const cars = this.getCar();
        const title = this.createHeaderTitle('Garage Page')
        const headerAdd = this.renderHeaderTop();
        this.container.append(headerAdd);
        this.container.append(title);
        this.container.append(cars);


        return this.container
    }
}

export default Garage;