
import { Box, Flex, Image } from "@chakra-ui/react"

function Navbar()
{
    return (
        <Flex bg="red.300">
        <Box boxSize='100px' p="20px" marginLeft="22px">
           <Image src='https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0'  alt='PharmEasy' />
        </Box>
        </Flex>

    
    )
}

export default Navbar;