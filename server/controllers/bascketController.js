const { Basket } = require("../models/models");
const ApiError = require("../error/ApiError");

class BascketController {
  async add(req, res) {
    const { id } = req.params;
    const bascket = await Basket.create({ id });
    return res.json(bascket);
  }
  async getAll(req, res) {
    const bascket = await Basket.findAll();
    return res.json(bascket);
  }
  async delete(req, res) {
    const { id } = req.body;
    const bascket = await Basket.destroy({ where: { id: id } });
    return res.json(bascket);
  }
}

module.exports = new BascketController();
