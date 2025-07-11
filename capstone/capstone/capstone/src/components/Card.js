import { Heading, Image, Text, VStack, HStack, Button, Flex, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Flex
      direction="column"
      borderWidth="1px"
      borderRadius="xl"
      boxShadow="md"
      bg="white"
      overflow="hidden"
      width="250px"
      minHeight="300px"
    >
      <Image
        w="100%"
        h="150px"
        objectFit="cover"
        src={imageSrc}
        alt={title}
        borderTopRadius="xl"
      />
      <Box p={4} flex="1">
        <Heading as="h4" size="md" color="#36454F" mb={2}>
          {title}
        </Heading>
        <Text fontSize="sm" color="#36454F">
          {description}
        </Text>
      </Box>
      <Flex align="center" gap={2} p={4}>
        <Button
          variant="solid"
          colorScheme="teal"
          size="sm"
          href="#placeholder-link"
        >
          See more&nbsp;
          <FontAwesomeIcon icon={faArrowAltCircleRight} size="1x" color="#36454F" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Card;