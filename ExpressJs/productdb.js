console.log('Starting server...');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const mongoUrl = 'mongodb://localhost:27017/productDB';

app.use(bodyParser.json());
app.use(cors());

(async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 90000,
      bufferCommands: false,
    });
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
      console.log('Server setup complete.');
    });
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
  }
})();

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});
const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});
