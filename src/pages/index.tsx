import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";
import { Links } from "../components/Links";
import { Projects } from "../components/Projects";
import { StyledLink } from "../components/StyledLink";

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
      <Box maxW="800px" width="100%" mx="auto" px={3} pb={20}>
        <Header />
        <hr />
        <main>
          <Intro />
          <Links />
          <hr />
          <Projects />
        </main>
      </Box>
      <Box borderTopWidth="1px" px={4} textAlign="center" py={6}>
        This work is licensed under a{" "}
        <StyledLink href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License.
        </StyledLink>
      </Box>
    </>
  );
};

export default Index;
