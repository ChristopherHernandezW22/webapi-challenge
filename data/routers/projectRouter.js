const express = require('express');
const Project = require('../helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    Project.get()
        .then(project => {
            res
                .status(200)
                .json(project)
        })
        .catch(error => {
            console.log(error);
            res
                .status(500)
                .json({error:"Failed to reach the server."})
        })
});


module.exports = router;