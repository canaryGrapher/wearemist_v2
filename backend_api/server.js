const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv").config({ path: '../.env' });
const MongoClient = require("mongodb").MongoClient;
const getMail = require("./modules/emailSubscriberProvider");
const CONNECTION_URL = process.env.DATABASE_URL;
const DATABASE_NAME1 = process.env.DATABASE_1;
const DATABASE_NAME2 = process.env.DATABASE_2;
const DATABASE_NAME3 = process.env.DATABASE_3;
const path = require("path");


const transporter = nodemailer.createTransport({
  host: process.env.HOST_NAME,
  port: process.env.TRANSPORTER_MAILPORT,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD
  }
});

const app = express();
let date = new Date();
app.use(express.static(path.join(__dirname, "client/build")))

app.use(express.json()); // Make sure it comes back as json
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.set('trust proxy', true); //setting up so that we get the IP of the user
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const PORT = process.env.PORT || 3001;

//defining route for news
app.use("/news", require("./routes/news"))
//defining route for getting team memeber info
app.use("/teaminfo", require("./routes/teaminfo"))
//defining route for getting club announcements
app.use("/clubnews", require("./routes/clubnews"))
//defining route for profile of editors
app.use("/profile", require("./routes/profile"))
//defining route for geek terminal
app.use("/geekpage", require('./routes/geekpage'))
app.get("/", (req, res) => {
  res.send("<h1>Hi!</h1><p>This is the backend for <a href='https://wearemist.in'>https://wearemist.in</a> and there is nothing for you to see here</p>")
})
//code for submitting code
app.post("/contactMailer", async function (req, res) {
  collectionBlacklist.findOne({ 'ipAddress': req.ip })
    .then(function (doc) {
      if (!doc) {
        console.log('IP is allowed');
        const mailOptions = {
          from: process.env.EMAIL_ID, // sender address
          to: process.env.TEAMS_EMAIL, // list of receivers
          subject: 'Message from wearemist website', // Subject line
          html: `<h4>${req.body.name}</h4><br><p>${req.body.message}</p><br><br><p>Message from ${req.body.name}, email ${req.body.email}.</p><br><br><br><p>All details are as follows: <br />${req.header('user-agent')}<br /> IP address of the sender is: <ul> <li>${req.ips}</li> <li>${req.ip}</li></ul>`// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err)
            console.log(err);
        });
        collectionBlacklist.insertOne( { ipAddress: req.ip } );
        console.log("Added to the blacklist");
        res.status(200).json({msg: "success"})
      }
      else {
        console.log('IP is not allowed');
        res.status(200).json({
          msg: 'not_allowed'
       });
      }
    });
});

app.get("/checkblackliststatus", async function(req, res) {
  collectionBlacklist.findOne({ 'ipAddress': req.ip })
    .then(function (doc) {
      if (!doc) {
        console.log(`Document was not found ${doc}`)
        result = "not_allowed";
        res.send("true");
      }
      else {
        console.log(`${doc} was found`)
        result = "allowed";
        res.send("false");
      }
    });
})

function clearBlacklist() {
  console.log("deleting now");
  collectionBlacklist.deleteMany({});
}

app.get("*", function (req, res) {
  res.send("<h1>Hey!</h1><p>I don't know what you are trying to do, but this will not work.</p>");
});

  setInterval(clearBlacklist, 21600000);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  MongoClient.connect(
    CONNECTION_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) {
        throw error;
      }
      database1 = client.db(DATABASE_NAME1);
      database2 = client.db(DATABASE_NAME2);
      database3 = client.db(DATABASE_NAME3);
      collectionCC = database1.collection("CoreCommittee");
      collectionMC = database1.collection("ManagementCommittee");
      collectionWC = database1.collection("WorkingCommittee");
      collectionNews = database2.collection("news");
      collectionClubNews = database2.collection("clubNews");
      collectionWriters = database2.collection("verifiedWriters");
      collectionMailingList = database3.collection("mailingList");
      collectionBlacklist = database3.collection("blacklist");
      console.log("Connected to mongoDB Atlas");
    }
  );
});