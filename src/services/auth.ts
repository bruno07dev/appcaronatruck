interface IResolve {
  token: string;
  user: {
    name: string;
    email: string;
  };
}
export function sigIn(): Promise<IResolve> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'iuashdfuiadf5a4df5a4d65f456qwe4f8q43da',
        user: {
          name: 'Devlopment Unit',
          email: 'development@unit.com',
        },
      });
    }, 1000);
  });
}
