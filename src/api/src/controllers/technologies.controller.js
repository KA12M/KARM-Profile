const Technologies = require("../models/technologies.model");
const factory = require("./handlerFactory");

module.exports.getTechnologies = factory.getAll(Technologies); 
module.exports.createTechnology = factory.createOne(Technologies); 