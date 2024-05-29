export default function guardrail(mathFunction) {
  let value;
  const queue = [];

  try {
    value = mathFunction();
  } catch (err) {
    value = err.toString();
  }
  queue.push(value);
  queue.push('Guardrail was processed');
  return queue;
}
