
import { Box, Button, Flex, Image, Input, Select, Stack, Container, Skeleton, Spacer, ButtonGroup, Text, Divider } from "@chakra-ui/react"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Download from "./Download";

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

       

        
    
        <Box display="flex" gap="20px" bg="gray.50" >
           <Image marginLeft="22px"  p="10px" src='https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0'  alt='PharmEasy' />
         
        
       
 
        <Spacer />
        <ButtonGroup gap='2' p="10px">
            <Link to="/download">
                <Button colorScheme='teal'>Download App</Button>
            </Link>
            <Button colorScheme='teal'>Hello Log in</Button>
        </ButtonGroup>

        

       
        
       
       
         
         
        
           
        </Box>

        
        
    
   

     

        
    
    )
}

export default Navbar;