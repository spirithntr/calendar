import './styles/app.sass';
import './styles/day.sass';
import Note from './note.js';

// const Month = [];
// Month.push(new Note(2, 12, 18));
// Month.push(new Note(15, 10, 12));
// Month.push(new Note(18, 10, 11));

function renderDay(weekday) {
  let element = document.createElement('div');

  element.innerHTML = weekday;
  element.classList.add('day');
  return element;
}

'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ').forEach((name) => {
  document.body.appendChild(renderDay(name));
})

let test = new Note(21, 12, 13);
console.log('test day is actuall a',test.getDay());