interface iProps {
  image: string;
  name: string;
}
export const SearchCharacter: React.FC<iProps> = ({ image, name }) => {
  return (
    <>
      <img src={image + "/portrait_fantastic.jpg"} alt="" />
      <p style={{ backgroundColor: "black", color: "white" }}>{name}</p>
    </>
  );
};
