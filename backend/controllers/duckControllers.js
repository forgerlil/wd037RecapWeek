const DuckCollection = require('../models/duckSchema');
const askAI = require('../lib/openai.js');
const ErrorStatus = require('../utils/errorStatus');

const getAllDucks = async (req, res, next) => {
  try {
    const getDucks = await DuckCollection.find().populate('owner');
    if (!getDucks) throw new ErrorStatus('No ducks found', 404);
    return res.json(getDucks);
  } catch (error) {
    next(error);
  }
};

const getOneDuck = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSingleDuck = await DuckCollection.findById(id).populate('owner');
    if (!getSingleDuck) throw new ErrorStatus('Duck not found', 404);
    return res.json(getSingleDuck);
  } catch (error) {
    next(error);
  }
};

const createDuck = async (req, res, next) => {
  try {
    const { name, image, quote, owner } = req.body;
    const newDuck = await DuckCollection.create({ name, image, quote, owner });
    return res.status(201).json(newDuck);
  } catch (error) {
    next(error);
  }
};

const updateDuck = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, image, quote, owner } = req.body;

    const updatedDuck = await DuckCollection.findByIdAndUpdate(
      id,
      { name, image, quote, owner },
      { new: true, runValidators: true }
    ).populate('owner');

    return res.json(updatedDuck);
  } catch (error) {
    next(error);
  }
};

const deleteDuck = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteDuck = await DuckCollection.findByIdAndDelete(id);

    return res.json(deleteDuck);
  } catch (error) {
    next(error);
  }
};

const askDuck = async (req, res, next) => {
  try {
    const { input } = req.body;
    const aiResponse = await askAI(input);
    res.json({ duckSays: aiResponse });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDucks,
  getOneDuck,
  createDuck,
  updateDuck,
  deleteDuck,
  askDuck,
};
