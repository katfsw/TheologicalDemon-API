const router = require('express').Router();
const Demons = require('./demon-model.js');

router.get('/', (req, res) => {
    Demons.find()
        .then(demon => {
             res.json(demon);
         })
         .catch(err => res.send(err));
});

module.exports = router;