import './styles/record.sass'
export default function renderDay(notes) {
  const header = document.querySelector('.header');
  header.innerHTML = 'Day';
  const app = document.querySelector('.app');
  const today = new Date();
  app.innerHTML = '';
  let todayContainer = document.createElement('div');

  notes.forEach(note => {
    if (note.getDayFormat() === today.toDateString()) {
      let record = document.createElement('div');
      record.classList.add('note');
      record.innerText = note.record;
      todayContainer.appendChild(record);
    }
  });
  app.appendChild(todayContainer);
}