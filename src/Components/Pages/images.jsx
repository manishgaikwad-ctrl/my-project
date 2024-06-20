import React from 'react'
import MultipleInteractionCard from '../atoms/images'
import { Box } from '@mui/material'

const images = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        padding:"1rem 1rem",
        display:"flex",
        flexWrap:"wrap",
      }}
    >
       <MultipleInteractionCard /> 
       <MultipleInteractionCard /> 
       <MultipleInteractionCard /> 
       <MultipleInteractionCard /> 
       <MultipleInteractionCard /> 
       <MultipleInteractionCard /> 
    </Box>
  )
}

export default images