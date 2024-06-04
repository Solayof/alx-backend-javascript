export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let str = [];
  for (const val of set) {
    if (val.startsWith(startString)) {
      str.push(val.slice(startString.length));
    }
  }
  return str.join('-');
}
