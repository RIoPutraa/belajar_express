const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); 
const productRoutes = require('./routes/productRoutes');

// Load config
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware agar bisa baca data JSON dari body request
app.use(express.json()); 

// Test Route sederhana
app.get('/', (req, res) => {
  res.send('API E-Commerce sedang berjalan...');
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server berjalan di port ${PORT}`);
});