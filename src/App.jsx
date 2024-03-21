import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-black justify-center items-center h-svh">
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
