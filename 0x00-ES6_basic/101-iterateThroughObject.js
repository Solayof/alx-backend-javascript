export default function iterateThroughObject(reportWithIterator) {
  let string = '';
  reportWithIterator.map((value) => {
    string += !string ? value : ` | ${value}`;
    return string;
  });
  return string;
}
