import express from "express";
import cors from 'cors';
import products from './api/products.route.js';
import orders from './api/orders.route.js';

import profile from './api/profile.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/products", products);
app.use("/api/v1/user", profile);
app.use("/api/v1/orders", orders);
app.use('*', (req, res) => {
    res.status(404).json({ error: 'not found' });
})

export default app;
