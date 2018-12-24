import createWeekRow from './week.js';
import createHeaderRow from './createHeaderRow.js';
export default function renderWeekView(day, notes) {
  day = new Date(day);
  const header = document.querySelector(".header");
  const app = document.querySelector(".app");
  header.innerHTML = "Week";
  const weekTable = document.createElement("table");
  weekTable.prepend(createHeaderRow());
  const weekRow = createWeekRow(day, notes);
  app.innerHTML = "";
  weekTable.appendChild(weekRow);
  app.appendChild(weekTable);
}
