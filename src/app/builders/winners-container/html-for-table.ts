import { IState } from '../../types';

const createTableHTML = (state: IState) => `
  <tbody>
    <tr>
      <th>Number</th>
      <th>Car</th>
      <th>Model</th>
      <th class="table-win">
        <button class="button-wins 
        ${state.sortBy === 'wins' ? state.sortOrder.toLowerCase() : ''}" type="button">Wins</button>
      </th>
      <th class="time-cell">
        <button class="table-time 
        ${state.sortBy === 'time' ? state.sortOrder.toLowerCase() : ''}" type="button">Best time (sec)</button>
      </th>
    </tr>
  ${state.winners.map((winner, idx: number) => `
  <tr>
    <td>${idx + 1}</td>
    <td class="winner-icon" style="color:${winner.car.color};"></td>
    <td>${winner.car.name}</td>
    <td>${winner.wins}</td>
    <td>${winner.time}</td>
  </tr>`).join('')}
  </tbody> 
`;

export default createTableHTML;
