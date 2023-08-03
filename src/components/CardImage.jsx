import "../css/cardimage.css"; 

const CardImage = ({img}) => {
  return (
        <div className="card">
         <img className="img-fixed-size" src={img.url} alt="" />
        </div>
  );
};

export default CardImage;
