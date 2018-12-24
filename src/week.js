import './styles/week.sass';
import createDayPreview from './createDayPreview.js';
export default function createWeekRow(day, notes) {
  const today = new Date(day);
  const monday = getMonday(today);
  // buffer variable for iteration
  let weekDay = new Date(monday);
  weekDay.setDate(weekDay.getDate() - 1);
  const weekRow = document.createElement('tr');
  for (let i = 0; i < 7; i++) {
    let dayPreview = createDayPreview(weekDay.setDate(weekDay.getDate() + 1), notes);
    weekRow.appendChild(dayPreview);
  }
  return weekRow;
}

function getMonday(day) {
  day = new Date(day);
  let dayWeek = day.getDay();
  let diff = day.getDate() - dayWeek + 1;
  return new Date(day.setDate(diff));
}