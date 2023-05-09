const express = require('express');
const duckRouter = express.Router();
const {
  getAllDucks,
  getOneDuck,
  createDuck,
  updateDuck,
  deleteDuck,
  askDuck,
} = require('../controllers/duckControllers');
const {
  checkId,
  checkAddDuck,
  checkUpdateDuck,
  checkAskDuck,
} = require('../middlewares/validateReq');

duckRouter.route('/').get(getAllDucks).post(checkAddDuck, createDuck);
duckRouter
  .route('/:id')
  .all(checkId)
  .get(getOneDuck)
  .post(checkAskDuck, askDuck)
  .put(checkUpdateDuck, updateDuck)
  .delete(deleteDuck);

module.exports = duckRouter;
