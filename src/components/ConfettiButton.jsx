import  { useState } from 'react';
import Confetti from 'react-confetti';
import '../css/confeti.css';

const ConfettiButton = () => {
  const [isConfettiActive, setConfettiActive] = useState(false);

  const handleConfetti = () => {
    setConfettiActive(true);

    // Desactivar el efecto confeti después de 2 segundos (ajusta el tiempo según lo desees)
    setTimeout(() => {
      setConfettiActive(false);
    }, 5000);
  };

  return (
    <div className="confetti-container">
      {isConfettiActive && (
        <Confetti
        numberOfPieces={200}
        width={window.innerWidth}
        height={window.innerHeight}
        gravity={0.3}
        />
      )}
      <button className="confetti-button" onClick={handleConfetti}>
        ¡Da click para ver la Magia jejeje!
      </button>
    </div>
  );
};

export default ConfettiButton;
