export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let str = '';
  for (const val of set.values()) {
    // console.log(typeof val);
    if (val.startsWith(startString)) {
      str += str === '' ? val.slice(startString.length) : `-${val.slice(startString.length)}`;
    }
  }
  return str;
}
