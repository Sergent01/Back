const User = require("../models/user.models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const configs = require("../configs/jwt.configs");

exports.create = (req, res) => {
  let hasedPassword = bcrypt.hashSync(req.body.password, 10);

  const user = new User({
    email: req.body.email,
    password: hasedPassword,
  });

  user
    .save()
    .then((data) => {
      let userToken = jwt.sign(
        {
          id: data._id,
          auth: true,
        },
        configs.jwt.secret,
        {
          expiresIn: 90000,
        }
      );
      res.send({
        token: userToken,
        auth: true,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || "Vous avez une erreur",
      });
    });
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        let passwordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordValid) {
          return res.status(401).send({
            message: "password not valid",
            auth: false,
            token: null,
          });
        } else {
          let userToken = jwt.sign(
            {
              id: user._id,
            },
            configs.jwt.secret,
            {
              expiresIn: 90000,
            }
          );
          res.status(200).send({
            auth: true,
            token: userToken,
          });
        }
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  };
