import './styles/app.sass';
import './styles/day.sass';
import Note from './note.js';
import createMonthTable from './month.js';
import renderWeekView from './renderWeek.js';
import renderMonthView from './renderMonth.js';
import renderDay from './day.js';
// import { render } from 'pug';
import createWeekRow from './week';

function renderDayTest(weekday) {
  let element = document.createElement('div');
  
  element.innerHTML = weekday;
  element.classList.add('day');
  return element;
}

'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ').forEach((name) => {
  let app = document.querySelector('.app');
  app.appendChild(renderDayTest(name));
})

// function renderMonthTable() {
//   let app = document.querySelector('.app');
//   app.innerHTML = '';
//   let table = document.createElement('table');
//   let headerRow = document.createElement('tr');
//   'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ').forEach((name) => {
//     let header = document.createElement('th');
//     header.innerHTML = name;
//     headerRow.appendChild(header);
//   })
//   table.appendChild(headerRow);
//   app.appendChild(table);
//   const currentDate = new Date();
// }
let Notes = [];
let test = new Note(24, 12, 13, 'privet');
let test1 = new Note(24, 12, 13, 'test1');
let test2 = new Note(24, 12, 13, 'test2');
let test3 = new Note(27, 12, 13, 'next day');
Notes.push(test, test1, test2, test3);
console.log(Notes);
console.log('test day is actually a', test.getDay());
renderMonthView(new Date(), Notes);
// renderWeekView(new Date(), Notes);
// renderDay(new Date(), Notes);