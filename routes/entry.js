var express = require('express');
var router = express.Router();
const entryModel = require('../models/entry');


router.post(
  '/save',
  (req, res) => {
    var data = req.body;
    var entry = new entryModel(data);
    try {
      trade.save();
      res.status(200).send(entry);
    } catch (e) {
      res.status(400).send(e);
    }
  }
);


router.get('/get/:uid', (req, res) => {
  var id = req.params.uid;
  try {
    entryModel
      .find({ uid: id }, (err, result) => {
        if (result != null) res.status(200).send(result);
        else res.status(400).send(err);
      })
      .exec();
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;
