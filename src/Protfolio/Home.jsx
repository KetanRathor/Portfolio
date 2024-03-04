
import {Stack} from "@mui/material";
import Header from "./Header";
import HomeDetails from "./HomeDetails";
export default function Home() {
  return (
    <>
    
    <Stack
    
    sx={{height:"100vh"}}>
       <Header/>
       
       <HomeDetails/>
    </Stack>
    </>
  )
}
