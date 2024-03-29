const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const stripe = require("stripe")("sk_test_lKL5mpbIp5XQh3X750dAA8yr00laScgXRm");

const app = express();

app.use(cors());
app.use(express.json());

app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("/", (req, res) => {
  res.status(200).send(" Welcome ... 👍 ");
});


app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  // console.log("payment received at backend ---> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
