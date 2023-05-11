const userRouter = require('express').Router();
const {
  login,
  getOneUser,
  createUser,
  logout,
} = require('../controllers/userControllers');
const checkToken = require('../middlewares/checkToken');

userRouter.route('/login').post(login);
userRouter.route('/register').post(createUser);
userRouter.route('/me').get(checkToken, getOneUser);
userRouter.route('/logout').get(logout);

module.exports = userRouter;
