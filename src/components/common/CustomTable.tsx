import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import React from "react";

export type CustomTableColumnType = {
  // id is the key for each column in each row, take care of sending it unique
  id: string;
  label: string;
  minWidth: number;
};

export type CustomTableType = {
  rows: any[];
  columns: CustomTableColumnType[];
  page: number;
  rowsPerPage: number;
  onPageChange(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    page: number
  ): void;
  onRowsPerPageChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
};

export const CustomTable: React.FC<CustomTableType> = ({
  rows,
  columns,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map((column: CustomTableColumnType) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((column: CustomTableColumnType, index) => (
                  <TableCell key={`${row.id}~${index}`} align='left'>
                    {row[column.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </Paper>
  );
};
