import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ];
    this._devices = [
      {
        id: 2,
        name: "a515",
        price: 50000,
        rating: 0,
        img: "392442d7-1c57-4b61-825c-cd36cc85de4f.jpg",
      },
      {
        id: 3,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "c93f760b-26f9-4418-91d8-270e4c9b8f1e.jpg",
      },
      {
        id: 3,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "c93f760b-26f9-4418-91d8-270e4c9b8f1e.jpg",
      },
    ];
    makeAutoObservable(this);
  }

  // устанавливаем данные
  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }
  // получаем данные
  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
}
