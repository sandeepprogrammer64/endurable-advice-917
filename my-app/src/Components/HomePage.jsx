import { Input, Text, Button, Flex, Image, Box, Divider, Center, Container, Heading} from "@chakra-ui/react";
import { Icon, PhoneIcon, createIcon, LockIcon, AttachmentIcon } from '@chakra-ui/icons';


function HomePage()
{
    return (
       
        <div>
            <Text fontSize='20px' color='bold'>What are You Looking For?</Text>
            
            <Input w="40%" size="lg" marginTop="20px" borderRadius="80px"></Input>
            <Button colorScheme="teal" marginLeft="-6%" borderRadius="25px" marginBottom="5px">Search</Button>
            
            <Flex marginTop="50px" gap="60px" marginLeft="50px">
            <Box className="boxes" border="1px solid gray.200">
               <a href=""> <Image src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0" h="81px" w="100px" /></a>
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

        <Heading marginLeft="-900" marginTop="30px">Offers Just For You</Heading>
        
        <Flex marginTop="60px" marginLeft="50px" gap="20px">
        <Box bg='gray.40' w='30%'  display="flex" border="1px solid ">
           <Image w="60px" h="60px" p="4px"  src="https://cms-contents.pharmeasy.in/offer/5de18709978-fbf_logo.jpg?dim=1440x0" />
           <Text w="69%" p="10px">Flat 25% off on First 3 medicine orders</Text>
        </Box>

        <Box bg='gray.40' w='30%'  display="flex" border="1px solid ">
           <Image w="60px" h="60px" p="4px" src="https://cms-contents.pharmeasy.in/offer/5de18709978-fbf_logo.jpg?dim=1440x0" />
           <Text w="69%" p="10px">Flat 25% off on First 3 medicine orders</Text>
        </Box>

      

        <Box bg='blue.100' w='30%' border="1px  " borderRadius="10px">
            <Container>
            <LockIcon  />
            </Container>
            <Text color="blue.700">Login To View More Offers</Text>
            </Box>
        </Flex>

        <Heading marginLeft="-1000" marginTop="80px" >Payment Offers</Heading>


        <Flex marginTop="50px" gap="20px" marginLeft="40px">
            <Box w="425px" h="80px">
               <Image src="https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0" />
            </Box>

            <Box w="425px" h="80px">
               <Image src="https://cdn01.pharmeasy.in/dam/banner/banner/051ca0c08ef-AMAZON-PAY.jpg?dim=1440x0" />
            </Box>

            <Box w="425px" h="80px">
               <Image src="https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0" />
            </Box>
        </Flex>


        <Flex>
            <Box border="1px solid" display="flex" marginTop="60px" w="560px" marginLeft="40px" h="188px" bg="blue.100" borderRadius="10px">
                 <Image w="102px" h="96px" p="10px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZMAyZTZZq1E_dA33Y0gEM37_X_REXEXLWbyDRdgLlVFK1UnMi8y1s2sKQst5gNhNjIw&usqp=CAU" />
                 <Box>
                 <b><Text p="20px" fontSize="18px"  >Order With Prescription</Text></b>
                 <p style={{color:"#4f585E", fontSize:"14px", padding:"10px"}}>Upload prescription and we will deliver your medicines</p>
                 <Button colorScheme="teal" padding="20px" gap="5px"><AttachmentIcon /><b style={{color:"white"}}>Upload</b> </Button>
                 </Box>
             </Box>
             <Box w="725px" border="1px solid" h="184px"  marginTop="50px">
                
                <Heading>What is this</Heading>
                
             </Box>    

        </Flex>
       

        
        
        </div>

        
       
       
    )
}
export default HomePage;