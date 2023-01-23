import { IState, RaceStatus } from '../types';
import { getDriveStatus, startEngine } from '../api/api';
import getDistance from './animation/get-distance';
import animate from './animation/animate';

const startCar = async (state: IState, id: number): Promise<RaceStatus> => {
  const startButton = <HTMLButtonElement>document.querySelector(`#start-car-${id}`);
  startButton.disabled = true;

  const { velocity, distance } = await startEngine(id);
  const time = Math.round(distance / velocity);

  const engineStopButton = <HTMLButtonElement>document.querySelector(`#stop-car-${id}`);
  engineStopButton.disabled = false;

  const carIcon = <HTMLElement>document.querySelector(`#car-${id}`);
  const finish = <HTMLElement>document.querySelector(`#finish-${id}`);
  const distanceBetween = Math.floor(getDistance(carIcon, finish)) + 100;

  state.animation[id] = animate(carIcon, distanceBetween, time);

  const { success } = await getDriveStatus(id);

  if (!success) window.cancelAnimationFrame(state.animation[id].id);

  return { success, id, time };
};

export default startCar;
