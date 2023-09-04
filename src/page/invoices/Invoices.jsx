import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./date";
import Header from "../../component/Header";

const Invoices = () => {
  return (
    <Box>
        <Header title="INVOICES" subTitle="List of Invoice Balances" />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          checkboxSelection
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
