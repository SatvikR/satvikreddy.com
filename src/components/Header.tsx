import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <Heading
        bgGradient="linear(to-l, purple.400, cyan.600)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        pb={4}
        mt={4}
      >
        Satvik Reddy
      </Heading>
      <Text fontSize="xl" my={4}>
        Software/Web developer
      </Text>
    </header>
  );
};
