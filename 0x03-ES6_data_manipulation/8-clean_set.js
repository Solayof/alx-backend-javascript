export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
    return '';
  }
  const str = [];
  for (const val of set) {
    if (val) {
      if (val.startsWith(startString)) {
        str.push(val.slice(startString.length));
      }
    }
  }
  return str.join('-');
}
