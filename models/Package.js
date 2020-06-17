const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slug = require('slugs');

const packageSchema = new mongoose.Schema(
    {
          packageName: {
            type: String,
            trim: true,
            required: "Please enter the package's Name",
          },
          packageClient: {
            type: mongoose.Schema.ObjectId,
            ref: 'Client',
            required: 'Please the client for this package.',
          },
          packageMaterial: {
            type: [String],
            default: [],
          },
    }
);

module.exports = mongoose.model('packages', packageSchema);