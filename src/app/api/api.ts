import { CarSpecs, Engine, Car, Cars, Winner, Winners } from '../types';

const baseUrl = 'http://localhost:3000';
const garageUrl = `${baseUrl}/garage`;
const engineUrl = `${baseUrl}/engine`;
const winnersUrl = `${baseUrl}/winners`;

export const maxItemsPerGaragePage = 7;
export const maxItemsPerWinnersPage = 10;

export const getCars = async (page: number, limit = maxItemsPerGaragePage): Promise<Cars> => {
  const response = await fetch(`${garageUrl}?_page=${page}&_limit=${limit}`);

  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};

export const getCar = async (id: number): Promise<Car> => (await fetch(`${garageUrl}/${id}`)).json();

export const createCar = async (car: CarSpecs): Promise<Car> =>
  (
    await fetch(`${garageUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
  ).json();

export const deleteCar = async (id: number): Promise<Response> =>
  (await fetch(`${garageUrl}/${id}`, { method: 'DELETE' })).json();

export const updateCar = async (id: number, specs: CarSpecs): Promise<Car> =>
  (
    await fetch(`${garageUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(specs),
    })
  ).json();

export const startEngine = async (id: number): Promise<Engine> =>
  (await fetch(`${engineUrl}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngine = async (id: number): Promise<Engine> =>
  (await fetch(`${engineUrl}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

export const getDriveStatus = async (id: number): Promise<{ success: boolean }> => {
  const res = await fetch(`${engineUrl}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};

const getSortOrder = (sort: string, order: string) => (sort && order ? `&_sort=${sort}&_order=${order}` : '');

export const getWinners = async ({
  page,
  limit = maxItemsPerWinnersPage,
  sort = '',
  order = '',
}: {
  page: number;
  limit?: number;
  sort?: string;
  order?: string;
}): Promise<Winners> => {
  const response = await fetch(`${winnersUrl}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = await response.json();

  return {
    items: await Promise.all(items.map(async (winner: Winner) => ({ ...winner, car: await getCar(winner.id) }))),
    count: response.headers.get('X-Total-Count') || '0',
  };
};

export const getWinner = async (id: number): Promise<Winner> => (await fetch(`${winnersUrl}/${id}`)).json();

export const createWinner = async (winner: Winner): Promise<Response> =>
  (
    await fetch(`${winnersUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    })
  ).json();

export const deleteWinner = async (id: number): Promise<Response> =>
  (await fetch(`${winnersUrl}/${id}`, { method: 'DELETE' })).json();

export const updateWinner = async (id: number, winner: Winner): Promise<Response> =>
  (
    await fetch(`${winnersUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winner),
    })
  ).json();

const getWinStatus = async (id: number): Promise<number> => (await fetch(`${winnersUrl}/${id}`)).status;

export const saveWinner = async ({ id, time }: { id: number; time: number }): Promise<void> => {
  const winnerStatus = await getWinStatus(id);

  if (winnerStatus === 404) {
    await createWinner({ id, wins: 1, time });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, { id, wins: winner.wins + 1, time: time < winner.time ? time : winner.time });
  }
};