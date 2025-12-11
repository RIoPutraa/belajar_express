const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Menghubungkan ke MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    console.log(`MongoDB Terkoneksi: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Matikan server jika gagal konek
  }
};

module.exports = connectDB;