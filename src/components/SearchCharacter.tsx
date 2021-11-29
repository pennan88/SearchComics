interface iProps {
  image: string;
  name: string;
  description: string;
}
export const SearchCharacter: React.FC<iProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <>
      <img src={image + "/portrait_fantastic.jpg"} alt="" />
      <p>{name}</p>
      <p>{description}</p>
    </>
  );
};
