import axios from "axios";
import { useState } from "react";

import Editor from "./components/Editor/Editor";
import Uploader from "./components/Uploader";

function App() {
  const [codeState, setCodeState] = useState("");
  const [formState, setFormState] = useState("");

  axios.defaults.baseURL = "http://localhost:5000/api";

  return (
    <>
      <Uploader
        setCodeState={setCodeState}
        setFormState={setFormState}
        codeState={codeState}
      />
      <Editor
        codeState={codeState}
        setCodeState={setCodeState}
        formState={formState}
        setFormState={setFormState}
      />
    </>
  );
}

export default App;
