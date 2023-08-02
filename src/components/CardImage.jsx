import "../css/cardimage.css"; 

const CardImage = ({img}) => {
  return (
    <div className="containerCard">
      <div className="card">
          <h1>{img.height}</h1>
          <h3>{img.id}</h3>
          <h3>{img.width}</h3>
          {/* <img className="img-fixed-size" src={img.url} alt="" /> */}
      </div>
    </div>
  );
};

export default CardImage;
