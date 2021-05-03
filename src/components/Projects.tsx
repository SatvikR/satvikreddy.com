import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Project } from "./Project";
import { StyledLink } from "./StyledLink";

export interface ProjectsProps {}

export const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <Heading
        bgGradient="linear(to-l, cyan.400, blue.400)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        my={4}
        pb={3}
        textAlign="center"
      >
        Projects
      </Heading>
      <Wrap justify="space-evenly">
        <WrapItem>
          <Project
            name="Homework Help"
            desc="A platform made for students to get help on homework and assignments. Students can share questions, answer questions, and give feedback."
            tech={["typescript", "node", "react", "next", "ec2", "s3"]}
            href="https://github.com/SatvikR/homework-help"
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="CyanDB"
            desc="A lightweight, persistent key-value database written in go."
            href="https://github.com/SatvikR/cyandb"
            tech={["golang", "websockets"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="LCGE"
            desc="A Lightweight 2D game engine written in C"
            href="https://github.com/SatvikR/LCGE"
            tech={["c", "opengl"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Instagram Clone"
            desc="An open source implentation of Instagram"
            href="https://github.com/SatvikR/instagram-clone"
            tech={["typescript", "node", "react", "firebase", "ec2"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Memoize"
            desc="A memoization library for C++"
            href="https://github.com/SatvikR/memoize"
            tech={["cpp"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Lisolver"
            desc="An open-source equation solver and simplifier."
            href="https://github.com/SatvikR/lisolver"
            tech={["flask", "python", "next", "react", "typescript", "ec2"]}
          />
        </WrapItem>
      </Wrap>
      <Text mb={4} fontSize="lg">
        You can find more of my projects on my{" "}
        <StyledLink href="https://github.com/SatvikR">Github</StyledLink>
      </Text>
    </>
  );
};
