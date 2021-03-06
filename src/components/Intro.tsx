import React from "react";
import { StyledLink } from "./StyledLink";
import { Text } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Text my={4} fontSize="lg">
      I'm a fullstack web developer and sophomore at Aragon High School from the
      Bay Area. Currently, my favorite technologies are{" "}
      <StyledLink href="https://golang.org/">Golang</StyledLink>,{" "}
      <StyledLink href="https://en.wikipedia.org/wiki/The_C_Programming_Language">
        C
      </StyledLink>
      , <StyledLink href="https://www.opengl.org/">OpenGL</StyledLink>,{" "}
      <StyledLink href="https://www.typescriptlang.org/">Typescript</StyledLink>
      , <StyledLink href="https://www.mongodb.com/">MongoDB</StyledLink>,{" "}
      <StyledLink href="https://www.postgresql.org/">PostgreSQL</StyledLink>,{" "}
      <StyledLink href="https://nodejs.org/en/">Node.js</StyledLink>,{" "}
      <StyledLink href="https://reactjs.org/">React</StyledLink>,{" and "}
      <StyledLink href="https://nextjs.org/">Next.js</StyledLink>
    </Text>
  );
};
