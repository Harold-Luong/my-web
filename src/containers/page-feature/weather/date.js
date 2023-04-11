function convertTimestampToObjDate(timestamp) {
  const date = new Date(timestamp * 1000);
  const localDate = new Date(date.getTime());
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    localDate
  );

  const obj = {
    date: formattedDate,
    localDate: localDate,
    day: localDate.getDate(),
    hour: localDate.getHours(),
    min: localDate.getMinutes(),
  };

  return obj;
}
function formatDayShortLong(timestamp, weekday) {
  const date = new Date(timestamp * 1000);
  const options = { weekday: weekday, timeZone: "Asia/Ho_Chi_Minh" };
  const dayOfWeek = new Intl.DateTimeFormat("en-US", options).format(date);
  return dayOfWeek;
}
function roundToInteger(temp) {
  return parseInt(Math.round(temp));
}
export { convertTimestampToObjDate, formatDayShortLong, roundToInteger };
