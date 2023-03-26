import React from 'react'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import {Grid} from '@mui/material'
import icon1 from '../assets/images/icons11.png'
import icon2 from '../assets/images/credit-card.png'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

interface ServicesSectionProps {
    currentPage: string;
  }

  
  const ServicesSection = ({ currentPage }: ServicesSectionProps) => {
  return (
    <Grid container spacing={0} className='servicesection-mainGrid'>
        <Grid item xs={12} md={3}>
            <img src={icon1} style={{}}/>
            <h5>Customer Support</h5>
            <h6>Village did removed enjoyed explain talking</h6>
        </Grid>
        <Grid item xs={12} md={3}>
        <img src={icon2} style={{}}/>

            {/* <SupportAgentIcon className='icons'/> */}
            <h5>Secured Payment</h5>
            <h6>Village did removed enjoyed explain talking</h6>
        </Grid>
        <Grid item xs={12} md={3}>
            <LocalShippingOutlinedIcon className='icons'/>
            <h5>Free Home Delivery</h5>
            <h6>Village did removed enjoyed explain talking</h6>
        </Grid>
        <Grid item xs={12} md={3}>
            <LocalShippingOutlinedIcon className='icons' />
            <h5>30 Day Reuters</h5>
            <h6>Village did removed enjoyed explain talking</h6>
        </Grid>


    </Grid>
  )
}

export default ServicesSection