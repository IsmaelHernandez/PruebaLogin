import Clock from "../components/Clock";
import CardImage from "../components/CardImage";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/das.css";

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
    <div>
      <h1 className="title">Bienvenido, {user.username}!</h1>
      <br />
      <button className="btn2" onClick={onLogout}>Cerrar sesión</button>
      <br />
      <Clock />
      <br />
      <hr />

      <h1 className="title">Lista de Imagenes Consumidas por el Endpoint</h1>
      {images?.map((img) => (
        <CardImage img={img} key={`${img.id}`} />
      ))}
     
    </div>
  );
};

export default Dashboard;
