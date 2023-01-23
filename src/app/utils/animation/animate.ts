const animate = (car: HTMLElement, distanceBetween: number, animationTime: number): { id: number } => {
  const targetCar = car;
  const state: { id: number } = { id: 1 };

  let start: number | null = null;

  const getStep = (timestamp: number) => {
    if (!start) start = timestamp;

    const time = timestamp - start;
    const passed = Math.round(time * (distanceBetween / animationTime));

    targetCar.style.transform = `translateX(${Math.min(passed, distanceBetween)}px) translateY(18px)`;

    if (passed < distanceBetween) state.id = window.requestAnimationFrame(getStep);
  };

  state.id = window.requestAnimationFrame(getStep);

  return state;
};

export default animate;
