import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { StyledLink } from "./StyledLink";

export const Intro: React.FC = () => {
  return (
    <Box>
      <Text
        bgGradient="linear(to-l, purple.300, cyan.400)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Satvik Reddy
      </Text>
      <Text fontSize="xl" my={4}>
        Software/Web developer
      </Text>
      <hr />
      <Text my={4} fontSize="lg">
        I'm a fullstack web developer and freshman in highschool from the Bay
        Area. Currently, my favorite technologies are{" "}
        <StyledLink href="https://golang.org/">Golang</StyledLink>,{" "}
        <StyledLink href="https://www.typescriptlang.org/">
          Typescript
        </StyledLink>
        <StyledLink href="https://graphql.org">GraphQL</StyledLink>,{" "}
        <StyledLink href="https://www.postgresql.org/">PostgreSQL</StyledLink>,{" "}
        <StyledLink href="https://nodejs.org/en/">Node.js</StyledLink>,{" "}
        <StyledLink href="https://reactjs.org/">React</StyledLink>,{" and "}
        <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
      </Text>
    </Box>
  );
};
