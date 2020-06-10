const mongoose = require('mongoose')
const Schema = mongoose.Schema
//
const skateSchema = new Schema({
  name: {type: String, required: true},
  description: String,
  address: String,
})

const Spots = mongoose.model('Spots', skateSchema);



// spots = [
//   {
//     name: 'stoner park',
//     description: 'skate park',
//     address: '3213 mahogony glen drive'
//   },
//   {
//     name: 'westchester skate park',
//     description: 'small skate park',
//     address: '5423745 hkjfhqwugiv'
//   },
//   {
//     name: 'westchester skate park',
//     description: 'small skate park',
//     address: '5423745 hkjfhqwugiv'
//   }
// ]

module.exports = Spots;
