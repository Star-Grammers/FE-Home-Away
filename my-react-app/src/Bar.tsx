import React from "react";
import { Box } from "@mui/material";
import CopySearchAppBar from "./CopySearch";

const Bar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CopySearchAppBar />
    </Box>
  );
};

export default Bar;
