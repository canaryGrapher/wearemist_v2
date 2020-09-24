const express = require('express')
const router = express.Router();

router.get("/getCCdata", (req, res) => {
      try{
            collectionCC.find().project({_id: 1, name: 1}).toArray((err, board) => {
                  if (err) throw err;
                  res.send(board)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/getMCdata", (req, res) => {
      try{
            collectionMC.find().project({_id: 1, name: 1}).toArray((err, management) => {
                  if (err) throw err;
                  res.send(management)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/getWCdata", (req, res) => {
      try{
            collectionWC.find().project({_id: 1, name: 1}).toArray((err, working) => {
                  if (err) throw err;
                  res.send(working)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/getTopNews", (req, res) => {
      try{
            collectionNews.find().limit(10).sort({_id: -1}).project({_id: 1, newsHeading: 1}).toArray((err, headings) => {
                  if (err) throw err;
                  res.send(headings)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/getClubNews", (req, res) => {
      try{
            collectionClubNews.find().limit(4).sort({_id: -1}).project({_id: 1, content: 1, heading:1}).toArray((err, clubNews) => {
                  if (err) throw err;
                  res.send(clubNews)
            })
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get("/getIP", (req, res) => {
      try{
            res.send(req.ip)
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

module.exports = router

