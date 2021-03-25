import { LinkProps } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import React from "react";

export const StyledLink: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link color="purple.400" {...props} target="_">
      {children}
    </Link>
  );
};
