import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function ActivitySection(props) {

  return (
    <>
  
    <Box component={"div"} className="activity-section">
    <Box container className="activity-container">
    <Grid item xs={12} sm={12} md={12} lg={12} className="activity-main">
    <Box component={"div"} className='activity-content'>
    {props?.data?.title &&(
    <Typography variant='h3' className='activity-tilte'>{props?.data?.title}</Typography>)}

    <Box component={"div"} className='activity-description'>
    {props?.data?.description?.content[0]?.content[0]?.value &&(
    <Typography variant='body1' className='activity-des-txt'>{props?.data?.description?.content[0]?.content[0]?.value}</Typography>
    )}
    </Box>
    <Box component={'div'} className='activity-slider'>
    
    {props?.data?.activities?.map((activitydata,index)=>(
    <Box component={'div'} className='activity-card' key={index} sx={{backgroundImage:`url(${activitydata?.fields?.backgroundImage?.fields?.file?.url})` }} >
    <Box className='activity-card-text'>
    {activitydata?.fields?.activityName && (
       <Button variant='body1' href={activitydata?.fields?.activityLink} className='card-text'>{activitydata?.fields?.activityName}</Button>)}
     <Button className='card-btn' key={index} href={activitydata?.fields?.activityLink}><ArrowForwardIcon /></Button>
    </Box>
    
    </Box>
    
    )
    )}
    
    </Box>
    
    </Box>
    </Grid>
    </Box>
    </Box>
    
    </>
  )
}

export default ActivitySection
