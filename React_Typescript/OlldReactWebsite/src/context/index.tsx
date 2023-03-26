
import { createContext } from "react"
import { Product } from "../components/ProductCard"


interface ProductsContextType {
  products: Product[];
  featuredProducts: Product[];
}



export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  featuredProducts: [],
});

interface FeaturedProductsContextType {
  featuredProducts: Product[];
}

export const FeaturedProductsContext = createContext<FeaturedProductsContextType>({
  featuredProducts: []
});
