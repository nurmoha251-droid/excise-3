import  { useState } from "react";

const Language = () => {
  const [language, setLanguage] = useState("en");

  
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };

  return (
    <div >
      <h1>
        Language
      </h1>
      
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to Spanish" : "Switch to English"}
      </button>


      <h2 style={{ marginTop: "20px" }}>
        {language === "en" ? "Hello!" : "¡Hola!"}
      </h2>
    </div>
  );
};

export default Language;
