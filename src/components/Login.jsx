import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { useState } from 'react';
import data from '../data/users.json'; // Importamos el archivo JSON con los datos
import "../css/das.css"; 


const Login = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    // Simulamos la autenticación verificando los datos del usuario en el archivo JSON
    const user = data.users.find((user) => user.username === username && user.password === password);
    //Preguntamos si existe el user si no mandamos alerta
    if (user) {
      setLoggedIn(true);
      setCurrentUser(user);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div>
      {loggedIn ? (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Login;
