import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import EmptyImage from "public/assets/image/icons/empty 2.webp";

const Empty = () => {
  return (
    <Container>
      <Box className="d-grid j-center w-100">
        <Image src={EmptyImage} alt="Logo" width={180} priority={true} />
      </Box>
      <Box className="d-grid j-center w-100">
        <Typography variant="h4">It is empty in here.</Typography>
      </Box>
      <Box className="d-grid j-center w-100">
        <Typography variant="h6">
          Oops! Seems like there is nothing in this page yet.
        </Typography>
      </Box>
    </Container>
  );
};

export default Empty;
