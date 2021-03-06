import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, LinkBox } from "@chakra-ui/layout";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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
  | "ec2"
  | "s3"
  | "lambda"
  | "websockets"
  | "cpp"
  | "c"
  | "opengl"
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
links.set("ec2", "https://aws.amazon.com/ec2/");
links.set("s3", "https://aws.amazon.com/s3/");
links.set("lambda", "https://aws.amazon.com/lambda/");
links.set("c", "https://en.wikipedia.org/wiki/The_C_Programming_Language")
links.set("opengl", "https://www.opengl.org/")
links.set("cpp", "https://www.cplusplus.com/");
links.set(
  "websockets",
  "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"
);

export interface ProjectProps {
  name: string;
  desc: string;
  href: string;
  tech: Technology[];
}

export const Project: React.FC<ProjectProps> = ({ name, desc, tech, href }) => {
  const mw = (800 - 12 - 12) / 3 + 90 - (297.66 - 32 * 7);

  return (
    <Box
      maxW={`${mw}px`}
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
        <Link href={href} isExternal>
          {name}
          <ExternalLinkIcon w={3} h={3} color="gray.400" ml={1} mb={1} />
        </Link>
      </Text>
      <LinkBox minH="180px" w="239px">
        <Text mb={2}>{desc}</Text>
      </LinkBox>
      <Text fontWeight="bold" mb={2}>
        Technologies Used:
      </Text>
      <Flex>
        {tech.map((e, i) => {
          return (
            <Link key={i} href={links.get(e)} isExternal>
              <Image src={`/icons/${e}.svg`} boxSize="32px" mx={1} alt={e} />
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};
