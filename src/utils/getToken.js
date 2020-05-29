const foo = () => {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    });
  });

  return promise;
};

export default async () => {
  await foo();
  const { user } = JSON.parse(localStorage.getItem('persist:root'));
  const {
    currentUser: { token }
  } = JSON.parse(user);

  return token;
};
