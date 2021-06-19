import React, { Component, useRef, useEffect, useState } from "react";
import "./flat.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Flat = (props) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log("malo");
    setState(!state);
  }, [props.state.floor, props.state.typrBild]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  let loc = new Set();
  let typeBild = new Set();

  const onSubmit = (data) => {
    console.log("apapa");
    fetch("/api/filtPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(true);
        }
      );
  };

  const checkboxes = useRef();
  const checkboxes2 = useRef();
  let expanded = false;
  let expanded2 = false;

  const showCheckboxes = (expand, checkbox) => {
    if (!expand) {
      checkbox.current.style.display = "block";
      return true;
    } else {
      checkbox.current.style.display = "none";
      return false;
    }
  };
  const newType = (type) => {
    typeBild.has(type) ? typeBild.delete(type) : typeBild.add(type);
  };
  const newloc = (name) => {
    loc.has(name) ? loc.delete(name) : loc.add(name);
  };

  return (
    <form
      className={props.state.filtClassName[0]}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-container2" style={{ display: "flex" }}>
        <div style={{ marginTop: "16px" }}>
          <label htmlFor="female" className="nameRadio-buttom">
            Sale
          </label>
          <input
            name="acceptTerms"
            type="checkbox"
            checked
            {...register("sale")}
          />
          <label htmlFor="female" className="nameRadio-buttom">
            Rent
          </label>
          <input
            name="acceptTerms"
            type="checkbox"
            checked
            {...register("rent")}
          />
        </div>
        <div></div>
      </div>
      <div className="flex-container3">
        <input
          {...register("search_code")}
          className="margin-box"
          id="mailsend"
          type="text"
          placeholder="search by code"
        />

        <select
          style={{ height: "34px" }}
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
        <input
          {...register("rooms")}
          style={{ display: props.state.rooms }}
          className="margin-box"
          id="mailsend"
          type="number"
          placeholder="number of rooms"
        />
        <div style={{ display: "flex" }}>
          <input
            {...register("min_price")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min price"
          />
          <input
            {...register("max_price")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max price"
          />
        </div>
        <div style={{ display: props.state.floor }}>
          <input
            {...register("min_floor")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min floor"
          />
          <input
            {...register("max_floor")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max floor"
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            {...register("min_area")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min area"
          />
          <input
            {...register("max_area")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max area"
          />
        </div>
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
        <input type="submit" className="myButton" value="look for" />
      </div>
    </form>
  );
};

export default Flat;
