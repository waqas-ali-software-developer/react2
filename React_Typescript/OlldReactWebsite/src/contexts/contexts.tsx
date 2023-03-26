import { createContext } from "react";
import { Product } from "../components/ProductCard";

export interface ProductsContextType {
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


/*import { createContext } from "react"

export const ProductsContext = createContext()
export const FeaturedProductsContext = createContext()
*/