
const state = {
  filt: {
    search: "flat",
    building_type: "",
    district: "",
    max_area: "",
    max_floor: "",
    max_price: "",
    min_area: "",
    min_floor: "",
    min_price: "",
    rent: false,
    rooms: "",
    sale: false,
    search_code: "",
    street: "",
  },
  formData: {
    street: "",
    img: [],
    Mobile_number: "",
    area: "",
    building_type: "",
    category: "",
    description: "",
    district: "",
    floor: "",
    price: "",
    rent: false,
    rooms: "",
    sale: false,
    search_code: "",
    loc: "",
  },
  changedata(data) {
    this.formData = data;
    return this.formData;
  },
  rooms: "inline",
  floor: "flex",
  typrBild: "inline",
  filtClassName: [
    "filter-container filterHome-filter-container",
    "list-filter-container",
    "searchBlok",
    "flex-container",
  ],
  openFiltPage() {
    this.filtClassName = [
      "filter-container2 filterHome-filter-container",
      "list-filter-container2",
      "searchBlok2",
      "flex-container2",
    ];
  },
  openHomePage() {
    this.filtClassName = [
      "filter-container filterHome-filter-container",
      "list-filter-container",
      "searchBlok",
      "flex-container",
    ];
  },
  home() {
    this.rooms = "inline";
    this.floor = "none";
    this.typrBild = "inline";
    this.filt.search = "home";
    return this;
  },
  shop() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    this.filt.search = "shop";
    return this;
  },
  land() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    this.filt.search = "land";
    return this;
  },
  flat() {
    this.rooms = "inline";
    this.floor = "flex";
    this.typrBild = "inline";
    this.filt.search = "flat";
    return this;
  },
};
// localStorage.setItem('filt', state.filt)
// (localStorage.getItem('filt'))?state.filt=localStorage.getItem('filt') :localStorage.setItem('filt', state.filt)


export default state;
