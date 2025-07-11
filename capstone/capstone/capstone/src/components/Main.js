import React, { useEffect, useRef } from "react";
import { Box, Heading, Text, Button} from "@chakra-ui/react";

const Main = () => {
    return (
        <Box
            as="section"
            height="100vh"
            backgroundImage="url('./assets/Asset 20@4x.png')"
            backgroundSize="cover"
            backgroundPosition="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="white"
        >
            <Box textAlign="center" bg="rgba(0,0,0,0.5)" p={8} borderRadius="md">
            <Heading as="h1" size="2xl" mb={4}>
                Welcome to Our Site
            </Heading>
            <Text fontSize="lg" mb={6}>
                Discover our amazing services and solutions.
            </Text>
            <Button colorScheme="teal" size="lg">
                Get Started
            </Button>
            </Box>
        </Box>
        );
}
export default Main;