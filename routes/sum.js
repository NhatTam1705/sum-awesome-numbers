var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const { max } = req.body;
    try {
        let sum = 0;
        for (let i = 21; i < max; i += 21) {
            sum += i;
        }
        res.json(sum);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;