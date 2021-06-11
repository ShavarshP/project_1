import React, { Component, useRef } from "react";
import "./flat.css";

const Flat = (props) => {

  const formref = useRef();
  const rent = useRef();
  const sale = useRef();
  const checkboxes = useRef();
  const checkboxes2 = useRef();

  const onButtonClickSale = (sale) => {};
  const onButtonClickRent = (rent) => {};

  let expanded = false;

  function showCheckboxes() {
    if (!expanded) {
      checkboxes.current.style.display = "block";
      expanded = true;
    } else {
      checkboxes.current.style.display = "none";
      expanded = false;
    }
  }

  let expanded2 = false;

  function showCheckboxes2() {
    if (!expanded2) {
      checkboxes2.current.style.display = "block";
      expanded2 = true;
    } else {
      checkboxes2.current.style.display = "none";
      expanded2 = false;
    }
  }

  function chekForm() {}

  return (
    <div className={props.state.filtClassName[0]}>
      <div className="flex-container2">
        <label htmlFor="female" className="nameRadio-buttom">
          Sale
        </label>
        <input
          type="checkbox"
          id="other"
          name="gender"
          value="other"
          ref={sale}
          onClick={() => {
            onButtonClickSale(sale);
          }}
        />
        <label htmlFor="female" className="nameRadio-buttom">
          Rent
        </label>
        <input
          type="checkbox"
          id="other"
          name="gender1"
          value="other"
          ref={rent}
          onClick={() => {
            onButtonClickRent(rent);
          }}
        />
      </div>
      <div className="flex-container3">
        <input
          className="margin-box"
          id="mailsend"
          type="text"
          placeholder="search by code"
        />

        <form className="formchak" ref={formref}>
          <div className="multiselect">
            <div
              className="selectBox"
              onClick={() => {
                showCheckboxes();
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
        </form>
        <div style={{ display: "flex" }}>
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min price"
          />
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max price"
          />
        </div>
        <input
          style={{ display: props.state.rooms }}
          className="margin-box"
          id="mailsend"
          type="number"
          placeholder="number of rooms"
        />
        <div style={{ display: props.state.floor }}>
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min floor"
          />
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max floor"
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min area"
          />
          <input
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max area"
          />
        </div>
        <form className="formchak" style={{ display: props.state.typrBild }}>
          <div className="multiselect">
            <div
              className="selectBox"
              onClick={() => {
                showCheckboxes2();
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
        </form>
        <a
          className="myButton"
          onClick={() => {
            chekForm();
          }}
        >
          Search
        </a>
      </div>
    </div>
  );
};

export default Flat;
