const Survey = require("../models/survey.models");

exports.createSurvey = (req, res) => {
  const survey = new Survey({
    situation: req.body.situation,
    state: req.body.state,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: {
      street: req.body.address.street,
      zipCode: req.body.address.zipCode,
      city: req.body.address.city,
    },
    request: req.body.request,
    assistance: req.body.assistance,
    phone: req.body.phone,
    email: req.body.email,
  });
  console.log("Je suis survey = ",survey);
  if ((survey.request === "yes") && (survey.assistance === "yes")) {
    survey
      .save()
      .then(() => {
        console.log("Je suis dans le cas ou tout c'est bien passé");
        res.status(201).json({
          status: "Create"
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log("Je suis dans le cas ou il y a une erreur");
    res.status(403).json({
      status: "Not Created"
    });
  }
};

//Gerer la gestion de l'erreur car return tout le temps 200
exports.deleteSurvey = (req, res) => {
  Survey.deleteOne({ _id: req.query.id })
    .then(() => {
      res.status(200).json({
        message: " Survey deleted successfully !",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
