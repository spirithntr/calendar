import './styles/week.sass';
import createDayPreview from './createDayPreview.js';
import daysInMonth from './daysInMonth.js';
export default function renderWeek(day, notes) {
  const header = document.querySelector('.header');
  header.innerHTML = 'Week';
  const app = document.querySelector('.app');
  const today = new Date(day);
  const monday = getMonday(today);
  // buffer variable for iteration
  let weekDay = new Date(monday);
  weekDay.setDate(weekDay.getDate() - 1);
  const weekTable = document.createElement('table');
  const weekRow = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    console.log(monday.getDate() + i,weekDay);
    let dayPreview = createDayPreview(weekDay.setDate(weekDay.getDate() + 1), notes);
    weekRow.appendChild(dayPreview);
  }
  app.innerHTML = '';
  weekTable.appendChild(weekRow);
  app.appendChild(weekTable);

}

function getMonday(day) {
  day = new Date(day);
  let dayWeek = day.getDay();
  let diff = day.getDate() - dayWeek + 1;
  return new Date(day.setDate(diff));
}