import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { Base64 } from "js-base64";

const Step2 = (props) => {
  let history = useHistory();
  let files = [];
  let myimges = [];
  const [preview, setPreview] = useState(<div className="preview"></div>);
  let [imgContener, setimgContener] = useState([]);
  const input = useRef();
  const triggerInput = () => input.current.click();
  const accept = [".png", ".jpg", ".jpeg", ".gif"];

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return;
    }

    files = Array.from(event.target.files);

    files.filter((file, index) => {
      if (!file.type.match("image")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target.result;
        myimges = [...myimges, src];

        // console.log(Base64.encodeURI(src));
        // console.log(src);
        if (index == files.length - 1) {
          setimgContener([...imgContener, ...myimges]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    setPreview((prevState) => {
      return (
        <div className="preview">
          {imgContener.map((item, index) => {
            return (
              <div className="preview-image" key={index}>
                <img src={item} />
              </div>
            );
          })}
        </div>
      );
    });
  }, [imgContener]);

  useEffect(() => {
    input.current.setAttribute("multiple", true);
    input.current.setAttribute("accept", accept.join(","));
  }, []);

  const next = async () => {
    props.state.formData.img = imgContener;
    // console.log(props.state.formData);
    // await fetch("/api/add2", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //
    //   body: JSON.stringify(props.state.formData),
    // })
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(true);
    //     }
    //   );
    history.push("/add/step3");
  };
  return (
    <div className="container2">
      <div className="card">
        <input type="file" id="file" ref={input} onChange={changeHandler} />
        <div className="btn-cont" onClick={triggerInput}>
          Add photo
        </div>
        {preview}
      </div>
      <input
        type="submit"
        className="myButton myButton-form-newdata"
        value="next"
        onClick={next}
      />
    </div>
  );
};

export default Step2;
