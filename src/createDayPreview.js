export default function createDayPreview(day, notes) {
  day = new Date(day)
  let element = document.createElement('td');
  let date = document.createElement('p');
  date.classList.add('number');
  date.innerHTML = day.getDate();
  element.appendChild(date);
  notes.forEach(note => {
    if (note.getDayFormat() === day.toDateString()) {
      let record = document.createElement("div");
      record.classList.add("note");
      record.innerText = note.record;
      element.appendChild(record);
    }
  });
  return element;
}