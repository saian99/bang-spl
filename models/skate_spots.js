const mongoose = require('mongoose')
//
// const skateSchema = new mongoose.Schema({
//   name: {type: String, required: true},
//   description: String,
//   address: String,
// })
//
// const spots = mongoose.model('spots', skateSchema);



spots = [
  {
    name: 'stoner park',
    description: 'skate park',
    address: '3213 mahogony glen drive'
  },
  {
    name: 'westchester skate park',
    description: 'small skate park',
    address: '5423745 hkjfhqwugiv'
  },
  {
    name: 'westchester skate park',
    description: 'small skate park',
    address: '5423745 hkjfhqwugiv'
  }
]

module.exports = spots;
