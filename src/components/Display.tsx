export const Display = (props: { path: any; title: any }) => {
  const randomNumberGen = () => {
    return Math.floor(Math.random() * 100);
  };

  console.log(randomNumberGen());

  return (
    <>
      <p>{props.title?.[randomNumberGen()]?.title}</p>
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
