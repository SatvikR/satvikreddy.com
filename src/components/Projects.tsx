import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Heading, Link } from "@chakra-ui/react";
import React from "react";
import { Project } from "./Project";

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
      >
        Projects
      </Heading>
      <Wrap justify="space-evenly">
        <WrapItem>
          <Project
            name="Homework Help"
            desc="A platform made for students to get help on homework and assignments. Students can share questions, answer questions, and give feedback."
            tech={["typescript", "node", "react", "next"]}
            href="https://github.com/SatvikR/homework-help"
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="CyanDB"
            desc="A simple, persistent key-value database written in go."
            href="https://github.com/SatvikR/cyandb"
            tech={["golang"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Liproduce"
            desc="A platform made for restaruant owners to easily order high quality produce from reliable producers"
            href="https://github.com/SatvikR/liproduce"
            tech={["graphql", "react", "typescript", "node"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Notescribe"
            desc="An open-source music transcriber made for DVHacks |||"
            href="https://github.com/SatvikR/notescribe"
            tech={["flask", "python", "javascript"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Lisolver"
            desc="An open source equation solver and simplifier."
            href="https://github.com/SatvikR/lisolver"
            tech={["flask", "next", "react", "typescript"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Instagram Clone"
            desc="An open source implentation of Instagram"
            href="https://github.com/SatvikR/instagram-clone"
            tech={["typescript", "node", "react", "firebase"]}
          />
        </WrapItem>
      </Wrap>
    </>
  );
};
