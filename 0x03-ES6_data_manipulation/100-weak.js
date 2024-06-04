export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  // const key = JSON.stringify(endpoint);
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
// export  weakMap;
