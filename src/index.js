import './styles/app.sass';
import './styles/day.sass';

function renderDay(weekday) {
  let element = document.createElement('div');

  element.innerHTML = weekday;
  element.classList.add('day');
  return element;
}

'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ').forEach((name) => {
  document.body.appendChild(renderDay(name));
})