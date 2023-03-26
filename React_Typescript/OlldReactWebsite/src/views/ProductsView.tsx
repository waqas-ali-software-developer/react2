import React, { useContext } from 'react';
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductsContext } from '../context';

const ProductsView = () => {
  const productsContext = useContext(ProductsContext);

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Top Products" products={productsContext.products} />
      <FooterSection />
    </>
  )
}

export default ProductsView




