
import { Car, queryParams } from "../interfaces/interfaces";
import { CONSTANTS } from "../constatnts/constants"

class Requests {
    baseUrl: string;
    path;

    constructor() {
        this.baseUrl = 'http://localhost:3000';
        this.path = {
            garage: `${this.baseUrl}/garage`,
            engine: `${this.baseUrl}/engine`,
            winners: `${this.baseUrl}/winners`
        };
    }

    public async getCar(carId: number) {
        try {
            const response = await fetch(`${this.baseUrl}${this.path?.garage}/${carId}`, {
                method: 'GET',
            });
            return await response.json();
        } catch (e) {
            console.log('Error', (e as Error).toString());
        }
    }

    public async getCars(page: number) {
        try {
            const params: queryParams[] = [
                { key: '_page', value: page },
                { key: '_limit', value: CONSTANTS.carsPerPage },
            ];
            const response = await fetch(`${this.baseUrl}${this.path?.garage}${this.getQueryString(params)}`);
            const data = await response.json();
            const totalCars = Number(response.headers.get('X-Total-Count'));

        } catch (e) {
            console.log('Error', (e as Error).toString());
        }

    }

    private getQueryString(queryParams: queryParams[]) {
        return queryParams.length ? `?${queryParams.map((item) => `${item.key}=${item.value}`).join('&')}` : '';
    }

    public async deleteCar(carId: number): Promise<void> {
        try {
            await fetch(`${this.path?.garage}/${carId}`, {
                method: 'DELETE',
            });
        } catch (e) {
            console.log('Error', (e as Error).toString());
        }
    }

    public async updateCar(carData: Partial<Car>, id: number): Promise<void> {
        try {
            const response = await fetch(`${this.path?.garage}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(carData),
            });
            await response.json();
            //const curPage = state.get('page');
            // this.getCars(curPage);
        } catch (e) {
            console.log('Error', (e as Error).toString());
        }
    }

}

const requests = new Requests();

export default requests;