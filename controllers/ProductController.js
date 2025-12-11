const Product = require('../models/product');
const slugify = require('slugify');

const GetProducts = async (req,res) => {
    try {
        const products = await Product.find({});

        res.json({
            success: true,
            count: products.length,
            data : products
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error saat mengambil data'
        })
    }
}

const GetProductBySlug = async (req,res) => {
    try {
        const product = await Product.findById({slug: req.params.slug});

        if(product) {
            res.json(product);
        } else {
            res.status(404).json({message: 'Produk tidak ditemukan'});
        }
    } catch (error) {
        res.status(500).json({message:'server Error'})
    }
}
const createProduct = async (req, res) => {
  try {
    // 1. Terima data dari body request
    const { name, description, price, countInStock, category, imageUrl } = req.body;

    const slug = slugify(name,{lower: true})
    // 2. Buat instance produk baru (Mirip INSERT INTO)
    const newProduct = await Product.create({
      name,
      slug,
      description,
      price,
      countInStock,
      category,
      imageUrl
    });

    // 3. Kirim respon sukses (201 = Created)
    res.status(201).json({
      success: true,
      data: newProduct
    });

  } catch (error) {
    // Jika gagal (misal validasi required tidak terisi)
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { 
    createProduct,
    GetProducts,
    GetProductBySlug
};