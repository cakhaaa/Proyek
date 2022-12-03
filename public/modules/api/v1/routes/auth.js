const express = require('express');
const { celebrate } = require('celebrate');

const isAuth = require('../middlewares/isAuth');

const userController = require('../controllers/user');
const authValidator = require('../validators/auth');

const route = express.Router();

module.exports = (app) => {
  app.use('/auth', route);

  route.get(
    '/',
    isAuth,
    async (req, res) => res.json({
      status: 'OK',
      email: req.user.email,
    }).status(200),
  );


  route.post(
    '/login',
    celebrate(authValidator.login),
    async (req, res, next) => {
      try {
        const user = await userController.login(
          req.body.email,
          req.body.password,
        );
console.log(user)
        if (!user) {
          throw new Error('Wrong email or password!');
        }
res.redirect('/dashboard/')
        // return res.json({
        //   email: user.email,
        //   full_name: user.full_name,
        //   token: await userController.generateToken(user.id),
        // }).status(200);
      } catch (err) {
        return next(err);
      }
    },
  );
};
