const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  //locataire ou propriétaire
  situation: {
    type: String,
    require: true,
  },
  //En cours ou fini (moyen pour Locataire)
  state: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  address: {
    street: {
      type: String,
      require: true,
    },
    zipCode: {
      type: Number,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
  },
  //Le Client ne doit pas avoir de demande en cours auprès de « Maprime Renov »
  request: {
    type: String,
    require: true,
  },
  //Si Le client à déjà bénéficié d’une aide Maprime Rénov
  assistance: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("Survey", surveySchema);
