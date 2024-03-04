import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
   <>
    <Box>
        <Typography>
            <h1> Contact Me</h1>
            <form>
<label htmlFor="name">Nmae:</label>
<input type="text" id='name'  />
<br></br>
<br></br>
<label htmlFor="email">Email:</label>
<input type="text" id='email'  />
<br></br>
<br></br>
<label htmlFor="mobile">Mobile No:</label>
<input type="text" id='mobile'  />
<br></br>
<br></br>
<label htmlFor="message">Message:</label>
<input type="text" id='message'  />
<br></br>
<Button>Submit</Button>





            </form>
        </Typography>
       
    </Box>
   </>
  )
}

export default Contact
