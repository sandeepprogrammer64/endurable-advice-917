
import { Box, Button, Flex, Image, Select, Stack } from "@chakra-ui/react"

function Navbar()
{
    return (
        <Flex bg="red.300">
        <Box width='100px' p="20px" marginLeft="22px" display="flex">
           <Image src='https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0'  alt='PharmEasy' />
          Delivery To
         <Select placeholder="Select Pincode">
            
         </Select>
           
          
           
           
        </Box>
        </Flex>

    
    )
}

export default Navbar;