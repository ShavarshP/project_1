import React, { Component, useRef, useEffect, useState } from "react";
import "./announcement.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Step2 = (props) => {
  let files = [];
  const [preview, setPreview] = useState(<div className="preview"></div>);

  const input = useRef();
  const triggerInput = () => input.current.click();
  const accept = [".png", ".jpg", ".jpeg", ".gif"];

  const changeHandler = async (event) => {
    if (!event.target.files.length) {
      return;
    }

    files = Array.from(event.target.files);

    const img = await files.map((file) => {

      if (!file.type.match("image")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target.result;

        return (
          <div className="preview-image">
            <img src={src} alt={file.name} />
          </div>
        );
      };
      reader.readAsDataURL(file);

    });


    setPreview((prevState) => {
      return   <div className="preview">{img}</div>;
    });

  };
  useEffect(() => {
    input.current.setAttribute("multiple", true);
    input.current.setAttribute("accept", accept.join(","));
  }, []);

  return (
    <div className="container2">
      <div className="card">
        <input type="file" id="file" ref={input} onChange={changeHandler} />
        <div className="btn" onClick={triggerInput}>
          open
        </div>
        {preview}
      </div>
    </div>
  );
};

export default Step2;
