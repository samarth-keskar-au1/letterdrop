const express = require('express');
const userRoute = require('./userRoute');
const urlShort = require('./URLShortRoute');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/users',
        route: userRoute,
    },
    {
        path: '/short',
        route: urlShort,
    },
];


defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});



module.exports = router;