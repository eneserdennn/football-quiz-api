const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  "name": {
    "type": "String"
  },
  "team": {
    "type": "String"
  },
  "main_position": {
    "type": "String"
  },
  "other_position": {
    "type": "String"
  },
  "age": {
    "type": "Number"
  },
  "height": {
    "type": "Number"
  },
  "foot": {
    "type": "String"
  },
  "citizenship": {
    "type": "String"
  },
  "image_url": {
    "type": "String"
  },
  "market_value": {
    "type": "Number"
  },
  "league": {
    "type": "String"
  },
  "transfer_history": {
    "type": [
      "Mixed"
    ]
  }
});

module.exports = mongoose.model('AllPlayer', PlayerSchema);