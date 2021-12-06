import React, { useState } from "react";
import {
  CustomTable,
  CustomTableColumnType,
} from "../../components/common/CustomTable";

// TODO: receive rows and columns from parent container

const columns = [
  { id: "id", label: "Todo id", minWidth: 170 },
  { id: "todoitem", label: "Todo Item", minWidth: 200 },
  { id: "status", label: "Status", minWidth: 240 },
];
const rows = [
  { id: "1", todoitem: "item 1", status: false },
  { id: "2", todoitem: "item 2", status: false },
  { id: "3", todoitem: "item 3", status: false },
  { id: "4", todoitem: "item 4", status: false },
  { id: "5", todoitem: "item 5", status: false },
  { id: "6", todoitem: "item 6", status: false },
  { id: "7", todoitem: "item 7", status: false },
  { id: "8", todoitem: "item 8", status: false },
  { id: "9", todoitem: "item 9", status: false },
  { id: "10", todoitem: "item 10", status: false },
  { id: "11", todoitem: "item 11", status: false },
  { id: "12", todoitem: "item 12", status: false },
  { id: "13", todoitem: "item 13", status: false },
  { id: "14", todoitem: "item 14", status: false },
  { id: "15", todoitem: "item 15", status: false },
];

export type CustomTableContainerProps = {
  rows: any[];
  columns: CustomTableColumnType[];
  onRequestData(): void;
};

export const CustomTableContainer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handlePageChange = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <CustomTable
      rows={rows}
      columns={columns}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleRowsPerPageChange}
    />
  );
};
