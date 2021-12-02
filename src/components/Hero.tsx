interface iProps {
  thumbnail: string;
  name: string;
  description: string;
  url: string;
  copywrite: string;
}

const Hero: React.FC<iProps> = ({
  thumbnail,
  name,
  description,
  url,
  copywrite,
}) => {
  return (
    <>
      <div className="heroImageContainer">
        <img src={thumbnail} alt="" />
      </div>
      <div className="heroContentContainer">
        <div className="heroNameContainer">
          <h3>{name}</h3>
        </div>
        <div className="heroDescriptionContainer">
          <p>{description ? description : "No available description"}</p>
        </div>
        <div className="heroAttributionContainer">
          <a href={url} target="_blank" className="ctn-btn learn-more">
            learn more
          </a>
          <p>{copywrite}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
