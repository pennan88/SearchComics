export const Display = (props: { path: any }) => {
  const randomNumberGen = () => {
    return Math.floor(Math.random() * 100);
  };

  console.log(randomNumberGen());

  return (
    <>
      <img
        src={
          props.path?.[randomNumberGen()]?.thumbnail?.path +
          "/portrait_uncanny.jpg"
        }
        alt=""
      />
    </>
  );
};
