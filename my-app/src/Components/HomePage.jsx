import {
  Input,
  Text,
  Button,
  Flex,
  Image,
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import { PhoneIcon, LockIcon, AttachmentIcon } from "@chakra-ui/icons";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import "../Styles/HomePage.css";

const fadeImages = [
  {
    url: "https://cdn01.pharmeasy.in/dam/banner/banner/a93d45ef9eb-HSBC.jpg?dim=1440x0",
    url2: "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
    url3: "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
    caption: "Slide 1",
  },
  {
    url: "https://cdn01.pharmeasy.in/dam/banner/banner/f3c446e4108-AMAZON.jpg?dim=1440x0",
    url2: "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
    url3: "https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0",
    caption: "Slide 2",
  },
  {
    url: "https://cdn01.pharmeasy.in/dam/banner/banner/9466405c308-au.jpg?dim=1440x0",
    url2: "https://cdn01.pharmeasy.in/dam/banner/banner/0c5c9ec6841-mobikwik.jpg?dim=1440x0",
    url3: "https://cdn01.pharmeasy.in/dam/banner/banner/7297689b914-AIRTEL.jpg?dim=1440x0",
    caption: "Slide 3",
  },
];

function HomePage() {
  return (
    <div>
      <Box className="nav-box">
        <Flex className="nav-flex">
          <Text className="nav-text">Medicine</Text>
          <Text className="nav-text">Lab Tests</Text>
          <Text className="nav-text">Health Care</Text>
          <Text className="nav-text">Surgeries</Text>
          <Text className="nav-text">Health Blogs</Text>
          <Text className="nav-text">PLUS</Text>
          <Text className="nav-text">Offers</Text>
          <Text className="nav-text">Value Store</Text>
        </Flex>
      </Box>

      <Text fontSize="20px" color="bold" marginTop="30">
        What are You Looking For?
      </Text>

      <Input w="40%" size="lg" marginTop="20px" borderRadius="80px"></Input>
      <Button
        colorScheme="teal"
        marginLeft="-6%"
        borderRadius="25px"
        marginBottom="5px"
        h="47"
      >
        Search
      </Button>

      <Flex marginTop="50px" gap="60px" marginLeft="50px">
        <Box className="boxes">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text marginTop="10px" fontWeight="bold">
            Medicine
          </Text>
          <Text className="text">UPTO 20% OFF</Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text fontWeight="bold">Lab Tests</Text>
          <Text className="text">UP TO 70% OFF</Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text fontWeight="bold">HealthCare</Text>
          <Text className="text">UP TO 60% OFF</Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text p="10px" fontWeight="bold">
            Health Blogs
          </Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text fontWeight="bold">PLUS</Text>
          <Text className="text">Save 5% extra</Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text p="10px" fontWeight="bold">
            Offers
          </Text>
        </Box>

        <Box className="boxes" border="1px solid gray.200">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text p="10px" fontWeight="bold">
            Surgeries
          </Text>
        </Box>

        

        










        <Box className="boxes" border="1px solid gray.600">
          <Image
            className="img"
            src="https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0"
            h="81px"
            w="100px"
          />
          <Text p="10px" fontWeight="bold">
            Value Store
          </Text>
          <Text className="text">UP TO 50% OFF</Text>
        </Box>
      </Flex>

      <Flex marginTop="50px" gap="20px" marginLeft="50px">
        <Image
          w="530px"
          h="230px"
          borderRadius="10px"
          src="https://cdn01.pharmeasy.in/dam/banner/banner/2f0bb7a7751-STAR25.jpg"
        />
        <Image
          w="530px"
          h="230px"
          borderRadius="10px"
          src="https://cdn01.pharmeasy.in/dam/banner/banner/b3a4bdb683b-1.jpg"
        />
        <PhoneIcon size="lg" />
      </Flex>

      <Heading marginLeft="-900" marginTop="40px" fontSize="26px">
        Lab Tests By Health Concern
      </Heading>
      <Flex gap="3">
        <Text marginLeft="53" fontSize="16px" colorScheme="red">
          Powered By
        </Text>
        <Image
          w="20"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Thyrocare_new_Logo2022.svg/1200px-Thyrocare_new_Logo2022.svg.png"
        ></Image>
      </Flex>

      <Flex marginLeft="53" marginTop="10" gap="6">
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/10dfe8c8aa7-HealthCheckups.jpg?dim=256x0"
        ></Image>
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/6c5479c6c0c-Vitamins.jpg?dim=256x0"
        ></Image>
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/69588f95674-Diabetes.jpg?dim=256x0"
        ></Image>
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/c507b2563fd-thyroid.png?dim=256x0"
        ></Image>
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/eeb3fe3251f-WomenCare.jpg?dim=256x0"
        ></Image>
        <Image
          w="180"
          h="185"
          src="https://cms-contents.pharmeasy.in/homepage_top_categories_images/355e9b77fb5-FeverInfection.jpg?dim=256x0"
        ></Image>
      </Flex>

      <Heading marginLeft="-900" marginTop="30px">
        Offers Just For You
      </Heading>

      <Flex marginTop="60px" marginLeft="50px" gap="20px">
        <Box
          className="offers"
          bg="gray.40"
          w="30%"
          display="flex"
          border="1px solid lightgray"
          borderRadius="10"
        >
          <Image
            w="60px"
            h="60px"
            p="6px"
            src="https://cms-contents.pharmeasy.in/offer/5de18709978-fbf_logo.jpg?dim=1440x0"
          />
          <Text w="69%" p="10px">
            Flat 25% off on First 3 medicine orders
          </Text>
        </Box>

        <Box
          className="offers"
          bg="gray.40"
          w="30%"
          display="flex"
          border="1px solid lightgray"
          borderRadius="10"
        >
          <Image
            w="60px"
            h="60px"
            p="4px"
            src="https://cms-contents.pharmeasy.in/offer/5de18709978-fbf_logo.jpg?dim=1440x0"
          />
          <Text w="69%" p="10px">
            Flat 25% off on First 3 medicine orders
          </Text>
        </Box>

        <Box
          className="offers"
          bg="blue.100"
          w="30%"
          border="1px  "
          borderRadius="10"
        >
          <Container>
            <LockIcon />
          </Container>
          <Text color="blue.700">Login To View More Offers</Text>
        </Box>
      </Flex>

      <Heading marginLeft="-1000" marginTop="80px">
        Payment Offers
      </Heading>

      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} alt={fadeImage.caption} />
                <img src={fadeImage.url2} alt={fadeImage.caption} />
                <img src={fadeImage.url3} alt={fadeImage.caption} />
              </div>
            </div>
          ))}
        </Fade>
      </div>

      <Flex>
        <Box
          display="flex"
          marginTop="60px"
          w="560px"
          marginLeft="40px"
          h="188px"
          borderRadius="10px"
          bg="blue.100"
        >
          <Image
            w="102px"
            h="96px"
            p="10px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZMAyZTZZq1E_dA33Y0gEM37_X_REXEXLWbyDRdgLlVFK1UnMi8y1s2sKQst5gNhNjIw&usqp=CAU"
          />
          <Box>
            <b>
              <Text p="20px" fontSize="18px" marginLeft="-40">
                Order With Prescription
              </Text>
            </b>
            <Text paddingBottom="10px" marginLeft="5">
              Upload prescription and we will deliver your medicines
            </Text>
            <Button
              colorScheme="teal"
              padding="20px"
              gap="5px"
              marginLeft="-250"
            >
              <AttachmentIcon />
              <b style={{ color: "white" }}>Upload</b>{" "}
            </Button>
          </Box>
        </Box>
        <Box
          w="725px"
          border="1px solid teal"
          h="184px"
          marginTop="60px"
          borderRadius="10"
        >
          <Text marginLeft="-500" marginTop="5">
            How does this work?
          </Text>
          <Flex gap="6" marginTop="5">
            <Text className="number1">1 </Text>
            <Text> Upload Photo of your Description</Text>
          </Flex>

          <Flex gap="6">
            <Text className="number2">2 </Text>
            <Text>Add Delivery Address and place the order</Text>
          </Flex>

          <Flex gap="4" marginLeft="330" marginTop="-20">
            <Text className="number2">3</Text>
            <Text>We will call you to confirm the medicines</Text>
          </Flex>

          <Flex gap="4" marginLeft="330" marginTop="10">
            <Text className="number2">4</Text>
            <Text className="sit">
              Now sit back and Relax! Your medicines will be delivered at your
              door step
            </Text>
          </Flex>

          {/* <Flex   gap="4" marginLeft="350" marginTop="-30">
            <Text  className="number2">3</Text>
            <Text >Add Delivery Address and place the order</Text>
          </Flex> */}
        </Box>
      </Flex>
    </div>
  );
}
export default HomePage;
