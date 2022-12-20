import {
  Box,
  Button,
  Image,
  Spacer,
  ButtonGroup,
  Input,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useDisclosure, useColorMode } from "@chakra-ui/react";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box display="flex" gap="20px" bg="gray.50">
      <Image
        marginLeft="22px"
        p="10px"
        src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
        alt="PharmEasy"
      />
      <Spacer />

      <ButtonGroup gap="2" p="10px">
        <Link to="/download">
          <Button colorScheme="teal">Download App</Button>
        </Link>
        <Button ref={btnRef} onClick={onOpen} colorScheme="teal">
          Hello Log in
        </Button>

        <Button onClick={toggleColorMode} colorScheme="teal">
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <Image
              colorScheme="blue.300"
              color="whiteAlpha.100"
              src="https://assets.pharmeasy.in/apothecary/images/logo_big.svg?dim=256x0"
            />
            <DrawerHeader>Quick Login / Register</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Enter your Phone Number" />
            </DrawerBody>

            <Button marginBottom="400px" colorScheme="teal">
              Send OTP
            </Button>
          </DrawerContent>
        </Drawer>
      </ButtonGroup>
      
    </Box>
  );
}

export default Navbar;
