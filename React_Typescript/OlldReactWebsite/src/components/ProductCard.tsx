import React from 'react'
import { NavLink } from 'react-router-dom'
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageName: string;
  category: string;
  articleNumber: string;
}

const ProductCard = ({ product }: { product: Product }) => {


  const addToWishList = () => {
    console.log("added to wish list")
  }

  const addToCompare = () => {
    console.log("added to compare")
  }

  const addToCart = () => {
    console.log("added to shopping cart")
  }


  return (
    <div className="col">
      <div className="card card-img-advertiseSection" >
        <div className="card-img advertise-Section-productimage">
      
          <img className='' src={`images/${product.imageName}`} alt={product.name} />
          <div className="card-menu d-xl-none">
              <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
              <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
              <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
          </div>
          <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none" >
            <span className="corner-left"></span>
            <span className="corner-right"></span>
            QUICK VIEW
          </NavLink>
        </div>
        <div className="card-body">
          <p className="card-category">{product.category}</p>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
          </p>
          <p className="card-price">{product.price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard