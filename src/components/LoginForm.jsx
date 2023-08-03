import { useState } from "react";
import "../css/loginform.css";


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);

    // Expresiones regulares para validar el nombre de usuario y la contraseña
    const usernameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    // Validar el nombre de usuario
    if (!usernameRegex.test(username)) {
      setUsernameError('El nombre de usuario debe tener entre 4 y 16 caracteres y solo puede contener letras, números, guiones y guiones bajos.');
    }

    // Validar la contraseña
    if (!passwordRegex.test(password)) {
      setPasswordError('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra minúscula, una letra mayúscula y un número.');
    }

  };

  return (
    <div className="containerForm">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <img className="img-fixed-size" src="../public/img/user.jpg" alt="" />
        </div>
        <h1 className="title">Login</h1>
        
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <span className="error">{usernameError}</span>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="error">{passwordError}</span>}
        </div>
        <br />
        <button className="btn" type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginForm;
