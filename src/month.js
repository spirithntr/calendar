import createDayPreview from './createDayPreview.js';
import daysInMonth from './daysInMonth.js';
import createWeekRow from './week.js';
export default function createMonthTable(day, notes) {
  const header = document.querySelector('.header');
  const table = document.createElement('table');
  day = new Date(day);
  header.innerHTML = 'Month';
  const today = new Date();
  //buffer variable for iteration
  let monthDay = new Date(day.getFullYear(), day.getMonth(), 1);
  for (let i = 0; i < 4; i++) {

    monthDay.setDate(monthDay.getDate() + 7);
    let weekRow = createWeekRow(monthDay, notes);
    table.appendChild(weekRow);
  }
  return table;
}