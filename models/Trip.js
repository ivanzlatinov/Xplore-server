const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /https?:\/\/./i

const tripSchema = new Schema({
    destination: {type: String, required: true },
    price: {type: Number, required: true, min: [0.01, 'Price must be a positive number']},
    people: {type: Number, required: true},
    description: {type: String, required: true, minlength: [10, 'Description must be atleast 10 characters long']},
    img: {
       type: String,
       validate: {
           validator: (value) => URL_PATTERN.test(value),
           message: 'Invalid URL, must start with HTTP/HTTPS'
       }
    }
 
 });

const Trip = model('Trip', tripSchema);

module.exports = Trip;