import  { useState, useEffect } from 'react';
import "../css/clock.css"; 

const Clock = () => {
  // Creamos estado `time` para almacenar la fecha y hora actual
  const [time, setTime] = useState(new Date());

  // creamos un useEffect para configurar el intervalo que actualiza el reloj cada segundo
  useEffect(() => {
    // Creamos un intervalo que actualiza la hora cada 1000ms (1 segundo)
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Limpiamos el intervalo 
    return () => clearInterval(interval);
  }, []);

  // Función para formatear la hora en formato HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="clock-container">
      <h2 className="clock-text">Hora actual:</h2>
      <p className="clock-text">{formatTime(time)}</p>
    </div>
  );
};

export default Clock;
