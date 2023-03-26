import React from 'react'
import { Grid } from '@mui/material'
import image1 from '../assets/images/image11.png'
import image2 from '../assets/images/image2.png'
import { Button } from '@mui/material'
import ProductGridSection from './ProductGridSection'
import ProductCard from '../components/ProductCard'
import { Product } from "../components/ProductCard"
import { Divider } from '@mui/material'

type AdvertisementProps = {
    products: Product[]
  }
  
  const Advertisement = ({ products }: AdvertisementProps) => {


    console.log('featuredProducts', products)
    return (
        <Grid container spacing={2} className='advertisement-section-Grid'>
            <Grid item xs={12} md={6}>
                <div className='advertisement-1'>
                    <div className='advertisement-image-div'>
                        <img src={image1} />
                    </div>
                    <div>
                        <h3>Pamela Reif's Top Picks</h3>
                        <Button variant='contained'>SHOP NOW</Button>
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className='advertisement-2'>
                    <div>
                        <h3>Let's Be Conscious</h3>
                        <Button variant='contained'>FLASH SALE</Button>
                    </div>
                    <div className='advertisement-image-div'>
                        <img src={image2} />
                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className='advertisement-section2'>
                    <h3>2 for USD $29</h3>
                    <Button variant='contained'>SALE</Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={0} sx={{ justifyContent: 'center' }}>
                    <section className="product-grid">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {
                                    products.map((product) => {
                                        return (
                                            <Grid item sm={6}>
                                                <ProductCard key={product.id} product={product} />
                                            </Grid>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </Grid>

            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={0} className='product-grid-mainGrid'>
                    <section className="product-grid">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {
                                    products.map((product) => {
                                        return (
                                            <Grid item sm={6}>
                                                <ProductCard key={product.id} product={product} />
                                            </Grid>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                <div className='advertisement-section2'>
                    <h3>2 for USD $29</h3>
                    <Button variant='contained'>SALE</Button>
                </div>
            </Grid>
            <Divider />

        </Grid>

    )
}

export default Advertisement