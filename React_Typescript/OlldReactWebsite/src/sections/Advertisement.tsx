import React, { useContext } from 'react'
import { Grid } from '@mui/material'
import image1 from '../assets/images/image11.png'
import image2 from '../assets/images/image2.png'
import { Button } from '@mui/material'
import ProductGridSection from './ProductGridSection'

import { ProductsContext } from '../context'

const Advertisement = () => {
    const productsContext = useContext(ProductsContext);

    const first4products = productsContext.featuredProducts.slice(0, 4);
    const last4products = productsContext.featuredProducts.slice(4, 8);

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
                <div className='advertisement-1'>
                    <div className='advertisement-image-div'>
                        <img src={image1} />
                    </div>
                    <div>
                        <h3>2 for USD $29</h3>
                        <Button variant='contained'>SHOP NOW</Button>
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
                <ProductGridSection products={first4products} advertisementStyle />
            </Grid>

            <Grid item xs={12} md={6}>
                <ProductGridSection products={last4products} advertisementStyle />
            </Grid>

            <Grid item xs={12} md={6}>
                <div className='advertisement-section2'>
                    <h3>2 for USD $29</h3>
                    <Button variant='contained'>SALE</Button>
                </div>
            </Grid>
        </Grid>

    )
}

export default Advertisement