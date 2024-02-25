import { Button, IconButton, Stack, Typography,fontSize,color } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';



export default function HomeDetails() {
  return (
   <>
   <Stack
   direction={'row'}
   sx={{height:"100%"}}
   >
    <Stack
    sx={{height:"100%",width:"50%"}}
    >
      <Typography
      fontSize={"80px"}
      marginX={"78px"}
      marginY={"50px"}
      sx={{fontFamily: 'Raleway',
      fontWeight: "700",
      textAlign: 'left',
      lineHeight: 1}}
      >
        Hello, I'm Ketan. I'm a Developer.
      </Typography>
      <Typography
      
      marginX={"85px"}
      sx={{fontFamily: '"Segoe UI Symbol"',
      fontSize:"15px",
      textAlign: 'justify',
    }}
      >
        Hello! I'm a Developer and I wanted to share my passion for creative design with you. My portfolio features uniquely designed graphics on a user-friendly website. With my experience, I can bring your creative ideas to le, exceeding your expectations. Let's partner together to turn your vision into a stunning and innovative reality.
      </Typography>

      <Stack
      marginX={"70px"}
      direction={"row"}
      position={"relative"}
      top={"20px"}
      gap={3}
      >
        <Button
        sx={{textTransform:"none",
        height:"35px",
        width:"130px",
        color:"white",
        bgcolor:"black",
        '&:hover':{backgroundColor:'black'},
        borderRadius:"6px"}}
        >
          Let's Talk
        </Button>
        
        
        <Button
        sx={{textTransform:"none",
        height:"35px",
        width:"150px",
        color:'black',
        fontWeight: "bold",
        
        
      }}
        >
          Learn More
          <ArrowRightAltIcon></ArrowRightAltIcon>
        </Button>
        
        
       
      </Stack>

    </Stack>
    <Stack
    sx={{
    height:"100%",
    width:"50%"}}
   
    >
      <Stack
       position={"relative"}
       top={"19vh"}
      >
     <img
            src="https://img.freepik.com/free-photo/portrait-confident-bearded-man-using-laptop-computer_171337-4255.jpg?w=900&t=st=1708778445~exp=1708779045~hmac=263e80f1cf49ea6c0e20a49e1760af4f4a08182a83eddf17c6aa75d561834ce8"
            
            style={{height:"100%",width: '100%' }}
          />
          </Stack>



    </Stack>
    
   </Stack>
   </>
  )
}
