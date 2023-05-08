const express = require('express');
const duckRouter = express.Router();
const {
  getAllDucks,
  getOneDuck,
  createDuck,
  updateDuck,
  deleteDuck,
} = require('../controllers/duckControllers');
const {
  checkId,
  checkAddDuck,
  checkUpdateDuck,
} = require('../middlewares/validateReq');

duckRouter.route('/').get(getAllDucks).post(checkAddDuck, createDuck);
duckRouter
  .route('/:id')
  .all(checkId)
  .get(getOneDuck)
  .put(checkUpdateDuck, updateDuck)
  .delete(deleteDuck);

module.exports = duckRouter;
