const express = require('express')
const router = express.Router();

//Home page
router.get('/', (req, res) => {
    //-------Html content templating-------//
    res.render('index',{ title: 'My Express app', message: 'Hello'})
});
module.exports = router;