const mongoose = require('mongoose');

const UrlCollectionSchema = mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
            trim: true,
        },
        uuid: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true,
    }
);

/**
 * @typedef URLCollection
 */
const URLCollection = mongoose.model('URLCollection', UrlCollectionSchema);

module.exports = URLCollection;