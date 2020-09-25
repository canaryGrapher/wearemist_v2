const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
      try{
            collectionWriters.findOne({name: `${req.query.author}`}, (err, profile) => {
                  if (err) throw err;
                  res.status(200).send(profile);
            });
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/stats", (req, res) => {
      try {
            collectionNews.find({author: req.query.author}).sort({_id: -1}).toArray((err, articles) => {
                        if (err) throw err;
                        res.status(200).send(articles)
                  })
      } catch (err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/profilepic", (req, res) => {
      try {
            collectionWriters.findOne({name: `${req.query.author}`}, (err, profileImage) => {
                  if(err) throw err;
                  res.status(200).send(profileImage)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

module.exports = router

