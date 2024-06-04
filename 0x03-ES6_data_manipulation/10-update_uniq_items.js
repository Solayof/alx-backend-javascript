export default function updateUniqueItems(map) {
  for (const kval of map.keys()) {
    if (map.get(kval) === 1) {
      map.set(kval, 100);
    }
  }
}
