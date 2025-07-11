import React from 'react';
import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react';

const PromoBanner = () => {
  return (
    <Box
      as="section"
      w="100%"
      bg="purple.500"
      color="white"
      py={8}
      textAlign="center"
      borderRadius="lg"
      boxShadow="md"
      mx={4}
    >
      <Stack spacing={4} align="center">
        <Heading fontSize="4xl">Special Promotion</Heading>
        <Text fontSize="lg">
          Enjoy up to 20% off on all bookings this weekend!
        </Text>
        <Button size="lg" colorScheme="teal">
          Reserve a Table
        </Button>
      </Stack>
    </Box>
  );
};

export default PromoBanner;