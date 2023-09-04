import { Box, useTheme } from "@mui/material";
import Pie from "./Pie";
import Header from "../../component/Header";

const PieChart = () => {
  const theme = useTheme();
  return (
    <Box>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />

      <Pie />
    </Box>
  );
};

export default PieChart;