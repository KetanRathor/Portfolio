import React from 'react'
import { Button, Stack,Box } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {

const navigate = useNavigate()
const location = useLocation()
const handleNavigation = (path) =>{
  navigate(path)
}

  return (
    <>
    <Stack
    direction={"row"} 
    display={"flex"}
    alignItems={"center"} 
    width={"100%"}
    // justifyContent={"space-around"} 
    // marginRight={"700px"}
    position={"relative"}
    // right={"6vw"}
    sx={{
      // bgcolor:"lightblue",
    height:"10vh"}}
    // marginX={"200px"}
    
    
    >
      <Box
      display={"flex"}
      fontSize={"30px"}
      width={"50%"}
      // justifyContent={"flex-start"}
      justifyContent={"space-between"}
      marginLeft={"10px"} 
      // paddingRight="40vw"
      >
      Portfolio
      </Box>
      <Stack
      // display={'flex'}
      direction={"row"}
      alignItems={"center"} 
      justifyContent={"center"}
      width={"50%"}
      
      gap={2}
      >
        <Button
        
        sx={{textTransform:"none",height:"32px",color:"black",}}
        onClick={()=>handleNavigation("/")}
        >Home</Button>
        <Button
        // sx={{textTransform:"none",height:"32px",color:"black"}}
        sx={{
          textTransform: 'none',
          height: '32px',
          color: location.pathname === '/aboutMe' ? 'white' : 'black',
          bgcolor: location.pathname === '/aboutMe' ? 'black' : 'transparent',
        }}
        onClick={()=>handleNavigation("/aboutMe")}
        // variant='outlined'
        >About Me</Button>
        <Button
        onClick={()=>handleNavigation("/skills")}
        sx={{textTransform:"none",height:"32px",color:"black"}}
        // variant='outlined'
        >Skills</Button>
        <Button
        onClick={()=>handleNavigation("/contact")}
        sx={{textTransform:"none",height:"32px",color:"black"}}
        // variant='outlined'
        >Contact</Button>
        <Button
        onClick={()=>handleNavigation("/resume")}
        sx={{textTransform:"none",height:"32px",width:"90px",color:"white",bgcolor:"black",'&:hover':{backgroundColor:'black'},
      borderRadius:"6px"}}
        
        
        // variant='outlined'
        >Resume</Button>
      </Stack>


    </Stack>
    </>
  )
}

export default Header;
