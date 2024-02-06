

const express = require('express');
const app = express();
const stripe = require('stripe');
const Stripe = stripe(process.env.STRIPE_SECRET )
require('dotenv').config();

const router = express.Router();
router.post('/create-checkout-session', async (req, res) => {

    const line_items = req.body.items.map((item) => {
        return {
          price_data: {
            currency: 'usd',
            product_data: {
              name: item.name,
              images: [item.photo],
              description: item.description,
              metadata: { id: item.id },
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      })
  const session = await Stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url : session.url});
});


module.exports = router;