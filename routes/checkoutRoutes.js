const express = require("express");

const { checkoutCreditCard } = require("../controller/checkoutControl");

const Route = express.Router();

Route.post("/checkout-credit-card", checkoutCreditCard);
module.exports = Route;
