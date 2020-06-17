const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slug = require('slugs');

const clientSchema = new mongoose.Schema(
    {
        created: {
            type: Date,
            default: Date.now,
          },
          clientName: {
            type: String,
            trim: true,
            required: "Please enter the client's Name",
          },
          clientAbrv: {
            type: String,
            trim: true,
            required: 'Please enter a abbreviation for the client.',
          },
    }
);

module.exports = mongoose.model('clients', clientSchema);