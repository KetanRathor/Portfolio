import React from 'react'
import { Button, Stack,Box } from '@mui/material'
const Header = () => {

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
        >Home</Button>
        <Button
        sx={{textTransform:"none",height:"32px",color:"black"}}
        // variant='outlined'
        >About Me</Button>
        <Button
        sx={{textTransform:"none",height:"32px",color:"black"}}
        // variant='outlined'
        >Skills</Button>
        <Button
        sx={{textTransform:"none",height:"32px",color:"black"}}
        // variant='outlined'
        >Contact</Button>
        <Button
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
