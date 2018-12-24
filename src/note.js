export default function Note(dayOfMonth, beginHour, endHour, record) {
  function isHourValid(hour) {
    return !isNaN(hour) && (hour >= 0) && (hour <= 23);
  }
  function isDayValid(day) {
    return !isNaN(day) && (day >= 0) && (day <= 31);
  }
  this.day = isDayValid(dayOfMonth) ? dayOfMonth : 1;
  this.beginHour = isHourValid(beginHour) ? beginHour : 0;
  this.endHour = isHourValid(endHour) && (endHour >= beginHour) ? endHour : 23;
  // notes are fixed to current month right now
  this.date = new Date(2018, 11, this.day);
  this.record = record;
}
Note.prototype.getDay = function () {
  const weekday = new Map();
  weekday
    .set(0, 'Sunday')
    .set(1, 'Monday')
    .set(2, 'Tuesday')
    .set(3, 'Wednesday')
    .set(4, 'Thursday')
    .set(5, 'Friday')
    .set(6, 'Saturday');
  
  let day = this.date.getDay();
  return weekday.get(day);
}
Note.prototype.getDayFormat = function () {
  return this.date.toDateString();
}