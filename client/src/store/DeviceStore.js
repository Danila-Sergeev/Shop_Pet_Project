import { makeAutoObservable } from "mobx";
export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильники" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Smart часы" },
      { id: 5, name: "Планшеты" },
      { id: 6, name: "Моноблоки" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "MSI" },
      { id: 5, name: "LG" },
      { id: 6, name: "Hoco" },
      { id: 7, name: "Asus" },
    ];
    this._devices = [
      {
        id: 1,
        name: "a515",
        price: 50000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 2,
        name: "a515",
        price: 50000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 3,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 4,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 5,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 6,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 7,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 8,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
      {
        id: 9,
        name: "a51",
        price: 30000,
        rating: 0,
        img: "https://avatars.mds.yandex.net/get-marketpic/1592829/pic9950ef0be09889a93db96b7f2d04f047/orig",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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
  setSelectedType(type) {
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
