interface iProps {
  image: string;
  name: string;
  click?: any;
}
export const SearchCharacter: React.FC<iProps> = ({ image, name, click }) => {
  return (
    <>
      <img src={image + "/portrait_fantastic.jpg"} alt="" onClick={click} />
      <p>{name}</p>
    </>
  );
};
