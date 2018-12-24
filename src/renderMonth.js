import createMonthTable from './month.js';
export default function renderMonthView(day, notes) {
  day = new Date();
  const header = document.querySelector(".header");
  const app = document.querySelector(".app");
  app.innerHTML = "";
  header.innerHTML = "Month";
  const table = createMonthTable(new Date(), notes);
  app.appendChild(table);
}