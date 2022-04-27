const express = require('express');

const {
    userControllers
} = require('../../controllers');

module.exports = dependencies => {
    const router = express.Router()
    const {
        addUserController

    } = userControllers(dependencies);

    router.route('/').post(addUserController);
    router.route('/').get((req, res) => {
        res.render('formUser.html')
    })

    return router;
}