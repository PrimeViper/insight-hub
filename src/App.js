import "../src/App.css";
import Board from "./components/Board";
import Footer from "./components/Footer";
import Header from './components/Header';
import React, { useState, useEffect } from "react";
 
const App = () => {

  const [ loading, setLoading ] = useState(true);
  const [ darkMode, setDarkMode ] = useState(false);
  const [ category, setCategory ] = useState("general");
  const categoryDetails = [ "general", "entertainment", "business", "science", "sports", "health", "technology"];

  useEffect(() => {
    let mode = localStorage.getItem("mode");
    if (mode === null) {
      localStorage.setItem("mode", JSON.stringify(true));
      setDarkMode(true);
    } 
    else {
      mode = JSON.parse(mode);
      setDarkMode(mode);
    }
  }, []);

  return (
    <div className={darkMode ? `bg-dark` : `bg-secondary`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} category={category} setCategory={setCategory} categoryDetails={categoryDetails} loading={loading} setLoading={setLoading}/>
      <Board category={category} loading={loading} setLoading={setLoading} darkMode={darkMode}/>
      <Footer setCategory={setCategory}/>
    </div>
  );
};

export default App;