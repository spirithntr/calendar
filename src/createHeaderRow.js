export default function createHeaderRow() {
  let headerRow = document.createElement('tr');
  'Monday Tuesday Wednesday Thursday Friday Saturday Sunday'.split(' ').forEach((name) => {
    let header = document.createElement('th');
    header.innerHTML = name;
    headerRow.appendChild(header);
  })
  return headerRow;
}