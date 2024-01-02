import Header from "./components/Header";
import React, { useState, useEffect } from "react";

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);
  const [ currentCategory, setCurrentCategory ] = useState("general");

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
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
    </div>
  );
};

export default App;