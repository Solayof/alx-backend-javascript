export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    try {
      resolve('instance of promise return');
    } catch (err) {
      reject(new Error('instance rejected'));
    }
  });
}
