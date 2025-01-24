import "./styles.css";
import React, { useState } from "react";
import Field from "./field";
import Translate from "./translate";
import Languages from "./languages";

function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");

  return (
    <div>
      <Field text={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}

export default App;
