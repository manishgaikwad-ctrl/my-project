import { Box } from "@mui/material";
import React from "react";
import BasicModal from "../atoms/underProcess";
const about = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        display: "flex",
        backgroundColor: "lightcoral",
      }}
    >
      <BasicModal />
    </Box>
  );
};

export default about;
