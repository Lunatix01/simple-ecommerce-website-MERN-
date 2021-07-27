const joi = require('joi')

// Register validation
const registerVal = (data) => {
    const schema = joi.object({
        username : joi.string()
            .min(5)
            .max(255)
            .required()
            .alphanum(),
        email : joi.string()
            .email()
            .required()
            .min(6)
            .max(255),
        password : joi.string()
            .min(8)
            .max(255)
            .required(),
    })
    const {error,value} = schema.validate({
        username: data.username,
        email : data.email,
        password : data.password,
    })
    return {error, value}
}

module.exports = {registerVal}