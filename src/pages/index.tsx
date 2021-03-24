import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Links } from "../components/Links";

const Index = () => {
  return (
    <Box maxW="800px" width="100%" mx="auto" px={3}>
      <Header />
      <hr />
      <main>
        <Intro />
        <Links />
      </main>
    </Box>
  );
};

export default Index;
