const getElPosition = (element: HTMLElement): { [key: string]: number } => {
  const { top, left, width, height } = element.getBoundingClientRect();

  return { x: left + width / 2, y: top + height / 2 };
};

const getDistance = (element: HTMLElement, element2: HTMLElement): number => {
  const position = getElPosition(element);
  const position2 = getElPosition(element2);

  return Math.hypot(position.x - position2.x, position2.y - position.y);
};

export default getDistance;
