
import { Box, Button, Flex, Image, Input, Select, Stack, Container, Skeleton } from "@chakra-ui/react"
import { useState } from "react";

function Navbar()
{

    const [loading, setloading] = useState(true);

    // if(loading)
    // {
    //     return( 
    //     <Stack>
    //     <Skeleton height='20px' />
    //     <Skeleton height='20px' />
    //     <Skeleton height='20px' />
    //   </Stack>
    //     )
    // }
   

   
    return (

       

        <Container >
        <Flex >
        <Box  display="flex">
           <Image  src='https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0'  alt='PharmEasy' />
          Delivery To
         <Select placeholder="Select Pincode">
            
         </Select>

         <Button>Download App</Button>
           
          
           
           
        </Box>

     </Flex>

     </Container>

        
    
    )
}

export default Navbar;