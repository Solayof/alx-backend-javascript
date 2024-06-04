export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const kval of map.keys()) {
    if (map.get(kval) === 1) {
      map.set(kval, 100);
    }
  }
}
