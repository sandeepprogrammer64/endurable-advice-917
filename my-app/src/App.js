import "./App.css";
import Navbar from "./Components/Navbar";

import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="App">
          <Navbar />
          <HomePage />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
