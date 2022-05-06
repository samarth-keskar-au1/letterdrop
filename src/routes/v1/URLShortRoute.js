const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations');
const { URLShortController } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .post(URLShortController.createShortUrl);


router
    .route('/:uuid')
    .get(URLShortController.getMainUrlFromShortKey)



module.exports = router;

