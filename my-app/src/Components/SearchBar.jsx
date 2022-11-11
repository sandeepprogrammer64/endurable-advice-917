import { Input, Text, Button, Flex, Image, Box} from "@chakra-ui/react";
import { Icon, PhoneIcon, createIcon } from '@chakra-ui/icons';


function SearchBar()
{
    return (
       
        <div>
            <Text fontSize='20px' color='bold'>What are You Looking For?</Text>
            
            <Input w="60%" size="lg" marginTop="20px" borderRadius="30px"></Input>
            <Button colorScheme="teal" marginLeft="-6%" borderRadius="25px">Search</Button>
            
            <Flex marginTop="50px" gap="60px" marginLeft="50px">
            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text  marginTop="10px" fontWeight="bold">Medicine</Text>
                <Text  color="tomato">UPTO 20% OFF</Text>
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text fontWeight="bold">Lab Tests</Text>
                <Text  p="10px" color="tomato">UP TO 70% OFF</Text>
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text fontWeight="bold">HealthCare</Text>
                <Text  p="10px" color="tomato">UP TO 60% OFF</Text>
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text  p="10px" fontWeight="bold">Health Blogs</Text>
                
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text fontWeight="bold">PLUS</Text>
                <Text c  p="10px" color="tomato">Save 5% extra</Text>
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text  p="10px" fontWeight="bold">Offers</Text>
                
            </Box>

            <Box className="boxes" border="1px solid gray.200">
                <Image src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0" h="81px" w="100px" />
                <Text  p="10px" fontWeight="bold">Surgeries</Text>
                
            </Box>

            <Box className="boxes" border="1px solid gray.600" >
                <Image src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0" h="81px" w="100px" />
                <Text p="10px" fontWeight="bold">Value Store</Text>
                <Text color="tomato">UP TO 50% OFF</Text>
            </Box>

        </Flex>

        <Flex marginTop="50px" gap="20px" marginLeft="50px">
            <Image w="530px" h="230px" borderRadius="10px" src="https://cdn01.pharmeasy.in/dam/banner/banner/2f0bb7a7751-STAR25.jpg" />
            <Image w="530px" h="230px" borderRadius="10px" src="https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg" />
            <PhoneIcon size="lg"/>
        </Flex>

        
        
        </div>

        
       
       
    )
}
export default SearchBar;