const UserCollection = require('../models/userSchema');
const ErrorStatus = require('../utils/errorStatus');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) throw new ErrorStatus('Missing fields', 400);

    const findUser = await UserCollection.findOne({ email }).select(
      '+password'
    );
    if (!findUser) throw new ErrorStatus('User not found!', 404);

    const compare = await bcrypt.compare(password, findUser.password);
    if (!compare) throw new ErrorStatus('Password does not match!', 401);

    const token = jwt.sign({ _id: findUser._id }, process.env.JWT_SECRET);

    return res
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
        sameSite: 'none',
        secure: true,
      })
      .sendStatus(200);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password)
      throw new ErrorStatus('Missing fields', 400);

    const hash = await bcrypt.hash(password, 10);

    const { _id } = await UserCollection.create({
      firstName,
      lastName,
      email,
      password: hash,
    });

    const token = jwt.sign({ _id }, process.env.JWT_SECRET);

    res
      .cookie('token', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60,
        sameSite: 'none',
        secure: true,
      })
      .sendStatus(201);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const findUser = await UserCollection.findById(req.userId);
    res.status(200).json(findUser);
  } catch (error) {
    next(error);
  }
};

const logout = (req, res, next) => {
  try {
    res
      .clearCookie('token', { path: '/', sameSite: 'none', secure: true })
      .sendStatus(200);
  } catch (error) {
    next(error);
  }
};

module.exports = { login, getOneUser, createUser, logout };
