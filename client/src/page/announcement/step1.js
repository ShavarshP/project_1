import React, { Component, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";


const Step1 = (props) => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.state.changedata(data)
    console.log(props.state.formData);
    history.push("/add/step2");
  };

  return (
    <form className={"filter-container-form"} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-container2" style={{ display: "flex" }}>
        <div style={{ marginTop: "16px" }}>
          <label htmlFor="female" className="nameRadio-buttom">
            Sale
          </label>
          <input name="acceptTerms" type="checkbox" {...register("sale")} />
          <label htmlFor="female" className="nameRadio-buttom">
            Rent
          </label>
          <input name="acceptTerms" type="checkbox" {...register("rent")} />
        </div>
        <div></div>
      </div>

      <div className="flex-container3">
        <input
          {...register("search_code")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="search by code"
        />
        <select
          style={{ height: "40px" }}
          name="Title"
          className="margin-box2"
          {...register("category")}
        >
          <option value="flat">flat</option>
          <option value="home">home</option>
          <option value="commercial">commercial</option>
          <option value="land">land</option>
        </select>

        <select
          style={{ height: "40px" }}
          name="Title"
          className="margin-box2"
          {...register("district")}
        >
          <option value="">district...</option>
          <option value="Ajapnyak">Ajapnyak</option>
          <option value="Arabkir">Arabkir</option>
          <option value="Avan">Avan</option>
          <option value="Davtashen">Davtashen</option>
          <option value="Erebuni">Erebuni</option>
          <option value="Kanaker-Zeytun">Kanaker-Zeytun</option>
          <option value="Kentron">Kentron</option>
          <option value="Malatia-Sebastia">Malatia-Sebastia</option>
          <option value="Nork-Marash">Nork-Marash</option>
          <option value="Nor Nork">Nor Nork</option>
          <option value="Nubarashen">Nubarashen</option>
          <option value="Shengavit">Shengavit</option>
          <option value="other">other</option>
        </select>

        <select
          style={{ height: "80px" }}
          name="Title"
          className="margin-box2"
          {...register("building_type")}
        >
          <option value="">building type...</option>
          <option value="stone">stone</option>
          <option value="panel">panel</option>
          <option value="monolith">monolith</option>
        </select>

        <input
          {...register("rooms")}
          style={{ display: "inline" }}
          className="margin-box2"
          id="mailsend"
          type="number"
          placeholder="number of rooms"
        />
        <input
          {...register("price")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder=" price"
        />

        <input
          {...register("floor")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="floor"
        />

        <input
          {...register("area")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="area"
        />

        <input
          type="tel"
          className="margin-box2"
          placeholder="Mobile number"
          name="Mobile number"
          {...register("Mobile_number")}
        />
        <textarea
          style={{ width: "250px", height: "300px" }}
          placeholder="description"
          className="margin-box2"
          rows="4"
          cols="50"
          {...register("description")}
        ></textarea>
      </div>
      <input type="submit" className="myButton myButton-form-newdata" value="next" />
    </form>
  );
};

// <input
// type="file"
// placeholder="Mobile number"
// name="foto"
// {...register("file")}
// />
export default Step1;
