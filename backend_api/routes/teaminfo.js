const express = require('express')
const router = express.Router();

router.get("/board", (req, res) => {
      try{
            collectionCC.find().toArray((err, result) => {
                   res.status(200).send(result);
            });     
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get('/mancomm', (req, res) => { 
      try{
            collectionMC.find().toArray((err, result) => {
                   res.status(200).send(result);
            });
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})

router.get('/workcomm', (req, res) => { 
      try{
            collectionWC.find().toArray((err, result) => {
                   res.status(200).send(result);
            });
      } catch(err) {
            res.status(500).json({msg: "Server Error"})
      }
})



module.exports = router