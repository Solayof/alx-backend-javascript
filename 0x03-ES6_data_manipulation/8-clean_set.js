export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-').toString();
}

// export default function cleanSet(set, startString) {
//   if (!startString || typeof startString !== 'string' || typeof set !== 'object') {
//     return '';
//   }
//   const str = [];
//   for (const val of set) {
//     if (val.startsWith(startString)) {
//       str.push(val.slice(startString.length));
//     }
//   }
//   return str.join('-');
// }
