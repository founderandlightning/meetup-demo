const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'How to do code review',
    });
});

module.exports = router;