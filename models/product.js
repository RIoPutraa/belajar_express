// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Nama produk wajib diisi'], // Validasi: tidak boleh kosong
    trim: true // Menghapus spasi di awal/akhir otomatis
  },
  slug: {
    type:String,
    unique: true,
    index: true
  },
  description: {
    type: String,
    required: [true, 'Deskripsi wajib diisi']
  },
  price: {
    type: Number,
    required: [true, 'Harga wajib diisi'],
    min: 0 // Validasi: Harga tidak boleh minus
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0 // Jika tidak diisi, otomatis dianggap 0
  },
  imageUrl: {
    type: String,
    required: true,
    default: 'https://via.placeholder.com/150' // Gambar default jika user tidak upload
  },
  category: {
    type: String,
    required: true
  }
}, {
  // Fitur Keren Mongoose: Timestamps
  // Ini otomatis membuat kolom 'createdAt' dan 'updatedAt'
  // Anda tidak perlu membuatnya manual seperti di MySQL
  timestamps: true 
});

// Membuat Model berdasarkan schema di atas
const Product = mongoose.model('Product', productSchema);

module.exports = Product;