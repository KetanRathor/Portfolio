import { RadioButtonCheckedOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Skills() {
  return (
    <>
    <Box
    display={"flex"}
    justifyContent={"center"}
    alignItems={"center"}
    
    sx={{height:"100vh",width:"100vw",bgcolor:"lightblue"}}
    >
        <Typography>
            <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
          Javascript
        
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
          React-js
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         C++
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         C#
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         HTML
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         CSS
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         MySql
        <br></br>
        <RadioButtonCheckedOutlined
            
            sx={{fontSize:"13px"}}/>
         Node js
        
        </Typography>
         

    </Box>
    </>
  )
}

export default Skills
