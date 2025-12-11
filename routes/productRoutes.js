const express = require('express');
const router = express.Router();
const { 
    createProduct,
    GetProducts,
    GetProductBySlug
 } = require('../controllers/ProductController');

// Saat user akses URL ini dengan method POST, jalankan fungsi createProduct
router.route('/')
.get(GetProducts)
.post(createProduct);

router.route('/:slug')
.get(GetProductBySlug)

module.exports = router;