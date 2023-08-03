import Clock from "../components/Clock";
import CardImage from "../components/CardImage";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/das.css";
import ConfettiButton from "../components/ConfettiButton";


const Dashboard = ({ user, onLogout }) => {
  //Estado para guardar la inf del endpoint
  const [images, setImage] = useState();

  //Usamos un usefect para hacer la peticion
  useEffect(() => {
    const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
    axios
      .get(URL)
      .then((res) => setImage(res.data))
      .catch((err) => console.log(err));
  }, []);

  // console.log(image);

  return (
    <>
        <div className="containerSeccion1">
          <div className="itemSeccion1">
            <h1 className="title1">Bienvenido, {user.username}!</h1>
            <img className="img-size" src="https://media.giphy.com/media/7NoNw4pMNTvgc/giphy.gif" alt="" />
            <ConfettiButton />
            <button className="btn2" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
        <br />
        <div>
          <Clock />
        </div>
        <br />
        <h3 className="das-title-animated">Lista de Cats jsjs</h3>
        <div className="containerSeccion2">
          {images?.map((img) => (
            <CardImage img={img} key={`${img.id}`} />
          ))}
        </div>
        
    </>
  );
};

export default Dashboard;
