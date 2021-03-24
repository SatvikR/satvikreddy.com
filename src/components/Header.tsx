import { Text } from "@chakra-ui/react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <Text
        bgGradient="linear(to-l, cyan.400, blue.400)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Satvik Reddy
      </Text>
      <Text fontSize="xl" my={4}>
        Software/Web developer
      </Text>
    </header>
  );
};
