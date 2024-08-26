export function numberFormat(num: any) {
  num = Math.floor(num);
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export function getBaseUri(url: string) {
  if (url.length < 4) return null
  let base = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
  if (base)
    return base[1]
  return null
}

export function getTime(date: any) {
  // console.log("Time ",date)
  if (!date) {
    return "";
  }
  const time = new Date(date);
  let hours = time.getHours() + ""; hours = hours.length < 2 ? "0" + hours : hours;
  let minutes = time.getMinutes() + ""; minutes = minutes.length < 2 ? "0" + minutes : minutes;

  return time.toJSON().slice(0, 10).replace(/-/g, "/") + "  " + hours + ":" + minutes;
}
