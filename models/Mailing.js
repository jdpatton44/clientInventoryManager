const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slug = require('slugs');

const mailingSchema = new mongoose.Schema(
    {
        mailingClient: {
                type: mongoose.Schema.ObjectId,
                ref: 'Client',
        },
        mailingName: {
            type: String,
            trim: true,
            required: "Please enter the mailing's Name",
          },
          mailingQuantity: {
            type: Number,
            default: 0,
          },
    }
);

module.exports = mongoose.model('mailings', mailingSchema);