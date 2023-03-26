import React from 'react';
import ProductCard from '../components/ProductCard';
import { Grid } from '@mui/material';
import { Product } from "../components/ProductCard"
interface ProductGridSectionProps {
  title?: string;
  products?: Product[];
  advertisementStyle?: boolean;
}

const ProductGridSection = ({ title, products = [], advertisementStyle } : ProductGridSectionProps) => {
  return (
    <section className="product-grid">
      <div className="container">
        <h1>{title}</h1>
        <Grid container spacing={1} columnSpacing={2} className="row row-cols-1 row-cols-md-4 g-4">
          {
            products.length === 0 ? "Loading..." : products.map((product) => {
              return (
                advertisementStyle 
                  ? <Grid key={product.articleNumber} item xs={12} sm={6} md={6}>
                    <ProductCard product={product} />
                  </Grid>

                  : <Grid key={product.articleNumber} item xs={12} sm={6} md={3}>
                    <ProductCard product={product} />
                  </Grid>
              )
            })
          }
        </Grid>
      </div>
    </section>
  )
}

export default ProductGridSection