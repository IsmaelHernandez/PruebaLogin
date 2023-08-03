import "../css/cardimage.css"; 

const CardImage = ({img}) => {
  return (
      <div className="containerCard">
        <div className="card">
         <img className="img-fixed-size" src={img.url} alt="" />
        </div>
      </div>
    
  );
};

export default CardImage;
