import React, { useRef, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

const Uploader = ({ codeState, setCodeState, setFormState }) => {
  const downloadRef = useRef();
  const [fileName, setFileName] = useState("");

  const inputChangeHandler = (e) => {
    const file = e?.target?.files[0];
    setFileName(file.name);
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsText(file);

    fileReader.onload = function (e) {
      const { result } = e.target;
      setCodeState(result);
      const idx1 = result.indexOf(`textObject.text = "`) + 19;
      const idx2 = result.indexOf('"', idx1);
      setFormState(result.slice(idx1, idx2));
    };
  };

  function download(filename, text) {
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();

  //   console.log(fileRef.current.files);

  //   const formData = new FormData();
  //   formData.append("file", fileRef.current.files[0]);

  //   axios
  //     .post("/files", formData)
  //     .then((res) => {
  //       toast.success(res?.data?.msg);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Something went wrong!");
  //     });
  // };

  return (
    <div className="uploader">
      <form action="">
        <input type="file" accept=".js" onChange={inputChangeHandler} />
        {codeState && (
          <button
            ref={downloadRef}
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              download(fileName ? "new" + fileName : "file.js", codeState);
            }}
          >
            Download
          </button>
        )}
      </form>
    </div>
  );
};

export default Uploader;
