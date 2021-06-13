import React, { Component, useRef } from "react";
import "./flat.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Flat = (props) => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

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
          className="margin-box"
          id="mailsend"
          type="text"
          placeholder="search by code"
        />

        <div className="formchak">
          <div className="multiselect">
            <div
              className="selectBox"
              onClick={() => {
                expanded = showCheckboxes(expanded, checkboxes);
              }}
            >
              <select>
                <option>Select an option</option>
              </select>
              <div className="overSelect"></div>
            </div>
            <div id="checkboxes" ref={checkboxes}>
              <label htmlFor="Ajapnyak" className="three">
                <input type="checkbox" />
                Ajapnyak
              </label>
              <label htmlFor="Arabkir" className="three">
                <input type="checkbox" />
                Arabkir
              </label>
              <label htmlFor="Avan" className="three">
                <input type="checkbox" />
                Avan
              </label>
              <label htmlFor="Davtashen" className="three">
                <input type="checkbox" />
                Davtashen
              </label>
              <label htmlFor="Erebuni" className="three">
                <input type="checkbox" />
                Erebuni
              </label>
              <label htmlFor="Kanaker-Zeytun" className="three">
                <input type="checkbox" />
                Kanaker-Zeytun
              </label>
              <label htmlFor="Kentron" className="three">
                <input type="checkbox" />
                Kentron
              </label>
              <label htmlFor="Malatia-Sebastia" className="three">
                <input type="checkbox" />
                Malatia-Sebastia
              </label>
              <label htmlFor="Nork-Marash" className="three">
                <input type="checkbox" />
                Nork-Marash
              </label>
              <label htmlFor="Nor-Nork" className="three">
                <input type="checkbox" />
                Nor Nork
              </label>
              <label htmlFor="Nubarashen" className="three">
                <input type="checkbox" />
                Nubarashen
              </label>
              <label htmlFor="Shengavit" className="three">
                <input type="checkbox" />
                Shengavit
              </label>
              <label htmlFor="other" className="three">
                <input type="checkbox" />
                other
              </label>
            </div>
          </div>
        </div>
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
        <div className="formchak" style={{ display: props.state.typrBild }}>
          <div className="multiselect">
            <div
              className="selectBox"
              onClick={() => {
                expanded2 = showCheckboxes(expanded2, checkboxes2);
              }}
            >
              <select>
                <option>А type</option>
              </select>
              <div className="overSelect"></div>
            </div>
            <div id="checkboxes2" ref={checkboxes2}>
              <label htmlFor="stone" className="three">
                <input type="checkbox" />
                stone
              </label>
              <label htmlFor="panel" className="three">
                <input type="checkbox" />
                panel
              </label>
              <label htmlFor="monolith" className="three">
                <input type="checkbox" />
                monolith
              </label>
            </div>
          </div>
        </div>
        <input type="submit" className="myButton" value="look for" />
      </div>
    </form>
  );
};

export default Flat;
