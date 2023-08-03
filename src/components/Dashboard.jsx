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
      <div className="">
        <div className="containerSeccion1">
          <div className="itemSeccion1">
            <h1 className="title1">Bienvenido, {user.username}!</h1>
            <ConfettiButton />
            <button className="btn2" onClick={onLogout}>
              Cerrar sesión
            </button>
          </div>
        </div>
        <div className="containerSeccion2">
          <div className="itemSeccion2">
            
          </div>
        </div>
        <br />
        <br />
        <Clock />
        <br />
        <hr />
        <h3 className="title1">Lista de Imagenes Consumidas por el Endpoint</h3>
        {images?.map((img) => (
          <CardImage img={img} key={`${img.id}`} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
