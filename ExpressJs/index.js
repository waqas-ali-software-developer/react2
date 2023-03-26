const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const mongoUrl = 'mongodb://127.0.0.1:27017/productDB';

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true,serverSelectionTimeoutMS: 10000 });

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  price: String,
  imageName: String,
  category: String,
});

const Product = mongoose.model('Product', productSchema);

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.send(product);
});

app.post('/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

app.put('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(product);
});

app.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send('Product deleted successfully');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
