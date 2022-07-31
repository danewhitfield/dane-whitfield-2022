import { Box } from "@mui/material";
import React from "react";
import DisplayIsoRoom from "../home/DisplayIsoRoom.jsx";

const Doodles = () => {
  return (
    <Box
      style={{
        marginTop: "8rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Doodles</h1>
      <Box marginTop={10}>
        <DisplayIsoRoom />
      </Box>
    </Box>
  );
};

export default Doodles;
