const state = {
  rooms: "inline",
  floor: "flex",
  typrBild: "inline",
  filtClassName:["filter-container filterHome-filter-container","list-filter-container","searchBlok","flex-container"],
  openFiltPage(){
    this.filtClassName = ["filter-container2 filterHome-filter-container","list-filter-container2","searchBlok2","flex-container2"]
  },
  openHomePage(){
    this.filtClassName = ["filter-container filterHome-filter-container","list-filter-container","searchBlok","flex-container"]
  },
  home() {
    this.rooms = "inline";
    this.floor = "none";
    this.typerBild = "inline";
    return this
  },
  shop() {
    this.rooms = "none";
    this.floor = "none";
    this.typerBild = "none";
    return this
  },
  land() {
    this.rooms = "none";
    this.floor = "none";
    this.typerBild = "none";
    return this
  },
  flat() {
    this.rooms = "inline";
    this.floor = "flex";
    this.typrBild = "inline";
    return this
  },
};

export default state;
