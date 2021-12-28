const express = require('express');
var router = express.Router();
const nodeModel = require('../models/node');
var Multer = require("multer");
const minioClient = require('../init/minio');

//Create a User
//This method saves a user in Mongo with proper parameters req.

router.post(
    '/save',
    (req, res) => {
        var userData = req.body;
        var unix = Math.floor(new Date().getTime() / 1000);
        var user = new nodeModel(userData);
        user.createdAt = unix;
        try {
            user.save();
            res.sendStatus(200);
        } catch (e) {
            res.status(400).send(e);
        }
    }
);


router.post(
    '/saveimages',
    Multer({ storage: Multer.memoryStorage() }).array('image', 7),
    (req, res) => {
        let uid = req.headers.uid;
        let files = req.files;
        try {
            for (let i = 0; i < files.length; i++) {
                minioClient.putObject(
                    `${process.env.MINIO_BUCKET_NAME}`,
                    `${uid}/${files[i].originalname}`,
                    files[i].buffer,
                    (error, etag) => {
                        if (error)
                            return console.log(error);
                        else
                            return etag;
                    });
            }
            res.sendStatus(200);
        } catch (error) {
            res.send(error).status(500);
        }
    }
)

//Get User
//This method returns a user from Mongo if a user exists

router.get('/get/:uid', (req, res) => {
    var ID = req.params.uid;
    try {
        nodeModel.find({ uid: ID }, (err, result) => {
            if (result.length != 0)
                //send JSON string
                res.status(200).send(result);
            else res.status(400).send(err);
        })
            .exec();
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
