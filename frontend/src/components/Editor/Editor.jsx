import React from "react";
// import { useState } from "react";
// import axios from "axios";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Editor = ({ codeState, setCodeState, formState, setFormState }) => {
  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setFormState(value);

    setCodeState((prevState) => {
      const idx1 = prevState.indexOf(`textObject.text = "`) + 19;
      // const idx2 = idx1;
      const str1 = prevState.slice(0, idx1);
      const str2 = prevState.slice(idx1 + formState.length);
      console.log(str1);
      // console.log(str2);
      return str1 + value + str2;
    });
  };

  // useEffect(() => {
  //   axios
  //     .get("/files/TextChanger")
  //     .then((res) => {
  //       const { data } = res.data;
  //       setCodeState(data);

  //       const idx1 = data.indexOf(`textObject.text = "`) + 19;
  //       const idx2 = data.indexOf('"', idx1);
  //       setFormState(data.slice(idx1, idx2));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="editor">
      <div className="left">
        <SyntaxHighlighter language="javascript" style={docco}>
          {codeState}
        </SyntaxHighlighter>
      </div>
      <textarea
        className="right"
        value={formState}
        onChange={inputChangeHandler}
      ></textarea>
    </div>
  );
};

export default Editor;
