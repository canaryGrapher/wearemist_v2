const express = require('express')
const router = express.Router();
const { ObjectId } = require("mongodb");

router.get("/", (req, res) => {
      try{
            collectionNews.find().sort({ sortingQuery: 1 }).toArray((err, news) => {
            newsPosts = news.reverse();
             res.status(200).json(newsPosts);
      });
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get('/getparticularNews', (req, res) => { 
      try{
            collectionNews.findOne({_id: ObjectId(req.query.id)}, (err, doc) => {
                  if(err) throw error;
                   res.status(200).send(doc)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})


module.exports = router