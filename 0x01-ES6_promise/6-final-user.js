import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName) {
  return Promise.allSettled(
    [
      signUpUser(firstName, lastName),
      uploadPhoto(firstName, lastName),
    ],
  )
    .then((results) => {
      const values = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          values.push(
            {
              status: result.status,
              value: result.value,
            },
          );
        } else {
          values.push(
            {
              status: result.status,
              value: `${result.reason}`,
            },
          );
        }
      });
    });
}
