import createDayPreview from './createDayPreview.js';
import daysInMonth from './daysInMonth.js'
function renderMonth(day, notes) {
  day = new Date(day);
  const header = document.querySelector('.header');
  header.innerHTML = 'Month';
  const app = document.querySelector('.app');
  const today = new Date();
  
  //buffer variable for iteration
  let monthDay = new Date(day.getFullYear(), day.getMonth(), 1);
  for (let )
}