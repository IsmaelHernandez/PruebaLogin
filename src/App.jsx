import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import { useState, useEffect } from "react";

const App = () => {
  //estado pantalla de carga
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga de 2 segundos
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  } else {
    return (
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
};

export default App;
