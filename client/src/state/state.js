import { useHttp } from "../myHooks/hook";

// async registerHandler(){
//   try {
//     const data = await useHttp().request("/api/customers");
//
//     return data
//   } catch (e){return e}
// },
const state = {
  filt: {
    sale: true,
    rent: true,
    search_code: "",
    district: "",
    rooms: "",
    min_price: "",
    max_price: "",
    min_floor: "",
    max_floor: "",
    min_area: "",
    max_area: "",
    building_type: "",
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
    return this;
  },
  shop() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    return this;
  },
  land() {
    this.rooms = "none";
    this.floor = "none";
    this.typrBild = "none";
    return this;
  },
  flat() {
    this.rooms = "inline";
    this.floor = "flex";
    this.typrBild = "inline";
    return this;
  },
};

export default state;
