const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
      try{
            collectionClubNews.find().sort({ "_id": -1 }).toArray((err, clubNews) => {
                  if (err) throw err;
                  res.status(200).send(clubNews);
            });
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

module.exports = router

