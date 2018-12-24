function daysInMonth(month, year) {
  //month starts at 1 - Jan
  return new Date(year, month, 0).getDate();
}
