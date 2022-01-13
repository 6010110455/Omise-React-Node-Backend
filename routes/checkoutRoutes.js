const express = require("express");

const {
  checkoutCreditCard,
  checkoutInternetBanking,
} = require("../controller/checkoutControl");

const Route = express.Router();

Route.post("/checkout-credit-card", checkoutCreditCard);
Route.post("/checkout-internet-banking", checkoutInternetBanking);

module.exports = Route;
