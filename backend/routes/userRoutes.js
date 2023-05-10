const userRouter = require('express').Router();
const {
  login,
  getOneUser,
  createUser,
} = require('../controllers/userControllers');
const checkToken = require('../middlewares/checkToken');

userRouter.route('/login').post(login);
userRouter.route('/register').post(createUser);
userRouter.route('/me').get(checkToken, getOneUser);

module.exports = userRouter;
