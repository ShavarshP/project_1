import React, { Component, useRef, useEffect, useState } from "react";
import "./announcement.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Step2 = (props) => {
  let files = [];
  const [preview, setPreview] = useState(<div className="preview"></div>);
  let [imgContener, setimgContener]=useState([])
  const input = useRef();
  const triggerInput = () => input.current.click();
  const accept = [".png", ".jpg", ".jpeg", ".gif"];

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return;
    }

     files = Array.from(event.target.files);

     files.filter((file) => {

      if (!file.type.match("image")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target.result;
        setimgContener([...imgContener, {_src: src, _alt: file.name}])

        imgIs(imgContener)
      };
      reader.readAsDataURL(file);
    });


  };
  const imgIs=(img)=>{

    setPreview((prevState) => {
      return   <div className="preview">{img.map((item, index)=>{
        return (
          <div className="preview-image" key={index} >
            <img src={item._src} alt={item._alt} />
          </div>
        )
      })}</div>;
    });
  }

  useEffect(() => {
    input.current.setAttribute("multiple", true);
    input.current.setAttribute("accept", accept.join(","));
  }, []);

  return (
    <div className="container2">
      <div className="card">
        <input type="file" id="file" ref={input} onChange={changeHandler} />
        <div className="btn" onClick={triggerInput}>
          Add photo
        </div>
        {preview}
      </div>
    </div>
  );
};

export default Step2;
