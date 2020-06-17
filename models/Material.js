const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slug = require('slugs');

const materialSchema = new mongoose.Schema(
    {
        materialName: {
            type: String,
            trim: true,
            required: "Please enter the material's Name",
          },
          materialQuantity: {
            type: Number,
            default: 0,
          },
    }
);

module.exports = mongoose.model('materials', materialSchema);