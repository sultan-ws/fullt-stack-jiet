const dotenv = require('dotenv').config();
const express = require('express');
const paymentController = require('../../Contoller/admin/payment/paymentController');
const viewTransactions = require('../../Contoller/admin/payment/paymentView');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


const paymentRoute = express.Router();

paymentRoute.post('/payment', paymentController);
paymentRoute.get('/viewpayments', viewTransactions);

module.exports = paymentRoute;