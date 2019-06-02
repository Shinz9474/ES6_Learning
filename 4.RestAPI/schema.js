const Joi = require('joi')

const tcschema = {
    tcname: Joi.string().min(3).required(),
    tcstatus: Joi.string().not('Praga').required()
};

const tcjoivalidate = Joi.validate(req.body, scema)

module.exports = {
    tcschema,
    tcjoivalidate
}