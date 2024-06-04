export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const intview = new Int8Array(buffer);
  intview[position] = value;

  return new DataView(buffer);
}
