import { IState } from '../types';
import { stopEngine } from '../api/api';

const stopCar = async (state: IState, id: number): Promise<void> => {
  const engineStopButton = <HTMLButtonElement>document.querySelector(`#stop-car-${id}`);
  engineStopButton.disabled = true;

  const startButton = <HTMLButtonElement>document.querySelector(`#start-car-${id}`);
  startButton.disabled = false;

  await stopEngine(id);

  if (state.activePage === 'garage-page') {
    const carIcon = <HTMLElement>document.querySelector(`#car-${id}`);
    carIcon.style.transform = 'translateX(0) translateY(19px)';

    if (state.animation[id]) window.cancelAnimationFrame(state.animation[id].id);
  }
};

export default stopCar;
