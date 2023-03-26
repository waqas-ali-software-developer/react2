import React, { useState } from 'react'
import { useEffect } from 'react';
import './style.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import ContactsView from './views/ContactsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import WishListView from './views/WishListView';
import ShoppingCartView from './views/ShoppingCartView';
import FooterSection from './sections/FooterSection';
import Showcase from './components/Showcase';
import NotFoundView from './views/NotFoundView';
import { ProductsContext } from './context';



function App() {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      let result = await fetch('http://localhost:5000/products')
      setProducts(await result.json())
    }
    fetchAllProducts()

    const fetchFeaturedProducts = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeaturedProducts(await result.json())
    }
    fetchFeaturedProducts()

  }, [setProducts])

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{products: products, featuredProducts: featuredProducts}}>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/products/:name" element={<ProductDetailsView />} />
        <Route path="/contacts" element={<ContactsView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/wishlist" element={<WishListView />} />
        <Route path="/shoppingcart" element={<ShoppingCartView />} />
        <Route path="/showcase" element={<Showcase />} />

  <Route path="*" element={<NotFoundView />} />
      </Routes>
      </ProductsContext.Provider>

    </BrowserRouter>
  );

}

export default App;
