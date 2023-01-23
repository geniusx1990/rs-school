import { CarSpecs } from '../types';

const numberOfGeneratedCars = 100;

const makes = [
  'Mercedes-Benz', 'Maserati', 'Porshe', 'BMW', 'Tesla', 'Mini', 'Toyota', 'Ferrari', 'Lamborgini', 'Peugeot', 'Infiniti'];

const models = ['X90', 'V6', 'X5', 'AMG', 'Q5', 'Q3', 'Q1', 'X1', 'X3', 'X7'];

const generateRandomName = () => {
  const make = makes[Math.floor(Math.random() * makes.length)];
  const model = models[Math.floor(Math.random() * models.length)];

  return `${make} ${model}`;
};

const colors = ['#FF0000', '#0000FF', '#808080', '#000000', '#FFFF00', '#964B00', '#8b00ff', '74ff00']
const generateRandomColor = () => {
  const color = colors[Math.floor(Math.random() * colors.length)];

  return color;
};

const generateRandomCars = (carsCount = numberOfGeneratedCars): CarSpecs[] =>
  new Array(carsCount).fill(1).map(() => ({ name: generateRandomName(), color: generateRandomColor() }));

export default generateRandomCars;
