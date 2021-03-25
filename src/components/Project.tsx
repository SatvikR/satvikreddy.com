import { Box, Link } from "@chakra-ui/layout";
import { Flex, Text, Image } from "@chakra-ui/react";
import React from "react";

export type Technology =
  | "graphql"
  | "typescript"
  | "golang"
  | "react"
  | "next"
  | "node"
  | "firebase"
  | "python"
  | "javascript"
  | "flask";

export const links: Map<Technology, string> = new Map();

links.set("graphql", "https://graphql.org/");
links.set("typescript", "https://www.typescriptlang.org/");
links.set("golang", "https://golang.org/");
links.set("react", "https://reactjs.org/");
links.set("next", "https://nextjs.org/");
links.set("node", "https://nodejs.org/");
links.set("flask", "https://flask.palletsprojects.com/");
links.set("firebase", "https://firebase.google.com/");
links.set("python", "https://www.python.org/");
links.set("javascript", "https://www.javascript.com/");

export interface ProjectProps {
  name: string;
  desc: string;
  tech: Technology[];
}

export const Project: React.FC<ProjectProps> = ({ name, desc, tech }) => {
  return (
    <Box
      maxW={`${(800 - 12 - 12) / 4}px`}
      w="100%"
      borderWidth="2px"
      p={4}
      mb={4}
      borderRadius="5px"
      _hover={{
        borderColor: "black",
      }}
    >
      <Text fontWeight="bold" mb={2} fontSize="lg">
        {name}
      </Text>
      <Box minH="180px">
        <Text mb={2}>{desc}</Text>
      </Box>
      <Text fontWeight="bold" mb={2}>
        Technologies:
      </Text>
      <Flex>
        {tech.map((e, i) => {
          return (
            <Link key={i} href={links.get(e)}>
              <Image src={`/icons/${e}.svg`} boxSize="32px" mx={1} />
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};
