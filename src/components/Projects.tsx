import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
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
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="CyanDB"
            desc="A simple, persistent key-value database written in go."
            tech={["golang"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Notescribe"
            desc="An open-source music transcriber made for DVHacks |||"
            tech={["flask", "python", "javascript"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Lisolver"
            desc="An open source equation solver and simplifier."
            tech={["flask", "next", "react", "typescript"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="Instagram Clone"
            desc="An open source implentation of Instagram"
            tech={["typescript", "node", "react", "firebase"]}
          />
        </WrapItem>
        <WrapItem>
          <Project
            name="COVID-19 Tracker"
            desc="A website that let's you view COVID-19 statistics in different states"
            tech={["flask", "python", "javascript"]}
          />
        </WrapItem>
      </Wrap>
    </>
  );
};
