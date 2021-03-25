import { Box } from "@chakra-ui/react";
import React from "react";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Links } from "../components/Links";
import { Projects } from "../components/Projects";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Satvik Reddy | Software Developer</title>
        <meta
          name="description"
          content="I'm a fullstack web developer and freshman in highschool from the Bay Area."
        />
        <script type="application/ld+json"></script>
      </Head>
      <Box maxW="800px" width="100%" mx="auto" px={3}>
        <Header />
        <hr />
        <main>
          <Intro />
          <Links />
          <hr />
          <Projects />
        </main>
      </Box>
    </>
  );
};

export default Index;
