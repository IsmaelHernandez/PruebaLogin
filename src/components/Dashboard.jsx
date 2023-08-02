import { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';


const Dashboard = ({ onLogout }) => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);

  const handleHideWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  useEffect(() => {
    // Cuando el componente se monte, establecemos un tiempo para ocultar el modal de bienvenida después de unos segundos (ejemplo: 5 segundos)
    const timer = setTimeout(() => {
      setShowWelcomeModal(false);
    }, 5000); // 5000 milisegundos (5 segundos)

    // Limpiamos el temporizador cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center"> {/* Centramos el contenido */}
   
      <h1>Bienvenido, !</h1>
      <Button onClick={onLogout}>Cerrar sesión</Button>


      <Modal
        show={showWelcomeModal}
        onHide={handleHideWelcomeModal}
        centered  // Propiedad para centrar el modal verticalmente
      >
        <Modal.Header closeButton>
          <Modal.Title>Bienvenido a la aplicación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hola , bienvenido a nuestra aplicación.</p>
          <p>Este es un mensaje de bienvenida para el usuario recién conectado.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHideWelcomeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dashboard;
