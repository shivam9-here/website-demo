import { Box, Grid, Typography, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

function BannerSection(props) {
  
  return (
    <>
      <Box component="section" className="hero-section" >
      <Box container className='herobannercontainer' sx={{backgroundImage:`url(${props?.data?.backgroundImage?.fields?.file?.url})`}} >
      <Grid item xs={12} sm={12} md={12} lg={12} className="hero-main">
      <Box component="div" className="banner-content">
      {props?.data?.title && 
        (<Typography variant="h1" className="banner-heading"
        dangerouslySetInnerHTML={{__html: props?.data?.title,}}    
         />
    )}

    <Box component="div" className="btn-cont">
    {
      props?.data?.button?.map((button,index)=>(
       <Button key={index} href={button?.fields?.buttonLink} 
       sx={{
                  background:button?.fields?.buttonBackgroundColor,
                  color:button?.fields?.buttonTextColor,
                  "&:hover": {
                    background: button?.fields?.buttonBackgroundHoverColor,
                    color: button?.fields?.buttonTextHoverColor,
                  },
                }}
       className="banner-btn">{button?.fields?.buttonName}</Button>
      ))
    }
    </Box>

      </Box>
      </Grid>
      </Box>
     
      </Box>
    </>
  )
}

export default BannerSection
