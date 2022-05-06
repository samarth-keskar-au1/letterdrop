const httpStatus = require('http-status');
const { URLCollection } = require('../models');
const ApiError = require('../utils/apiError');
const generateNanoId = require('../utils/generateNanoId');

/**
 * Create a short link
 * @param {Object} apiBody
 * @returns {Promise<User>}
 */
const createShortLink = async (apiBody) => {
    const { url } = apiBody;
    const getUniqueUUID = generateNanoId();

    return URLCollection.create({ url, uuid: getUniqueUUID });
};

/**
 * Get link by uuid
 * @param {uuid} uuid
 * @returns {Promise<URLCollection>}
 */
const getLinkByUUID = async (uuid) => {
    return URLCollection.findOne({ uuid: uuid })
};

module.exports = {
    createShortLink,
    getLinkByUUID
};