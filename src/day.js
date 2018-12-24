import './styles/record.sass'
export default function renderDay(day, notes) {
  day = new Date(day);
  const header = document.querySelector('.header');
  header.innerHTML = 'Day';
  const app = document.querySelector('.app');
  app.innerHTML = '';
  let todayContainer = document.createElement('div');

  notes.forEach(note => {
    console.log(note.getDayFormat())
    if (note.getDayFormat() === day.toDateString()) {
      let record = document.createElement('div');
      record.classList.add('note');
      record.innerText = note.record;
      todayContainer.appendChild(record);
    }
  });
  app.appendChild(todayContainer);
}