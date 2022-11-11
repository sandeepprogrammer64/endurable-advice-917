import {Container, Input, Text, Button, Flex} from "@chakra-ui/react";
import { Icon, createIcon } from '@chakra-ui/icons'

function SearchBar()
{
    return (
        <Container w="100%">
            <b>What are You Looking For?</b>
        <Flex>
        <Input size="lg" width="130%" borderRadius="50px" marginTop="20px"/>
        <Button colorScheme="teal">Search</Button>
        </Flex>

        </Container>
    )
}
export default SearchBar;