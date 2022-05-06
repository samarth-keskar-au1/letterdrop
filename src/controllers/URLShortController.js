const httpStatus = require('http-status');
const _ = require('lodash');
const ApiError = require('../utils/apiError');
const catchAsync = require('../utils/catchAsync');
const { URLService } = require('../services');

const createShortUrl = catchAsync(async (req, res) => {
    const entity = await URLService.createShortLink(req.body)
    res.status(httpStatus.CREATED).send({ id: entity.uuid });
});

const getMainUrlFromShortKey = catchAsync(async (req, res) => {
    const entity = await URLService.getLinkByUUID(req.params.uuid);
    if (!entity) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Shortened URL not found');
    }
    res.redirect(entity.url);
});


module.exports = {
    createShortUrl,
    getMainUrlFromShortKey
};