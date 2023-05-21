import React from "react";
import GeographyChart from "../../components/GeographyChart";
import { Box } from "@mui/material";
import Header from "../../componentsDashboard/Header";
const Geography = () => {
  return (
    <Box m="20px" height="75vh" p="2px">
      <Header title="GEOGRAPHY CHART" subtitle="simple geography chart" />
      <GeographyChart />
    </Box>
  );
};

export default Geography;
