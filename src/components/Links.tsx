import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { StyledLink } from "./StyledLink";

export const Links: React.FC = () => {
  return (
    <>
      <Text fontSize="lg">Find me online here: </Text>
      <UnorderedList mb={4} ml={12}>
        <ListItem>
          <StyledLink href="/resume.pdf" fontSize="lg">
            Resume
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="https://github.com/SatvikR" fontSize="lg">
            Github
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink href="https://devpost.com/SatvikR" fontSize="lg">
            Devpost
          </StyledLink>
        </ListItem>
      </UnorderedList>
    </>
  );
};
