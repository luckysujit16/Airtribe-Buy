// server.js (or your backend server file)
import express from "express";
import Razorpay from "razorpay";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: "rzp_test_GMhXbKuyrkSy7N",
  key_secret: "VUrrpCdveY3IaCJywOI9nri6",
});

app.post("/api/create-order", async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in the smallest currency unit
    currency: "INR",
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
