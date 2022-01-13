const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

var omise = require("omise")({
  publicKey: process.env.OMISE_PUBLIC_KEY,
  secretKey: process.env.OMISE_SECRET_KEY,
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/checkout-credit-card", async (req, res, next) => {
  console.log("data =>", req.body);
  const { email, name, amount, token } = req.body;
  try {
    const customer = await omise.customers.create({
      email,
      description: name,
      card: token,
    });

    const charge = await omise.charges.create({
      amount,
      currency: "thb",
      customer: customer.id,
    });

    console.log("charge =>", charge);
    res.send({
      amount: charge.amount,
      status: charge.status,
    });
  } catch (error) {
    console.log(error);
  }
  next();
});

app.listen(80, () => {
  console.log("Server is up");
});
