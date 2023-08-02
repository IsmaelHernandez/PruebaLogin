import Clock from '../components/Clock'

const Dashboard = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Bienvenido, {user.username}!</h1>
      <button onClick={onLogout}>Cerrar sesión</button>
      <br />
      <hr />
      <br />
      <Clock />
    </div>
  );
};

export default Dashboard;
