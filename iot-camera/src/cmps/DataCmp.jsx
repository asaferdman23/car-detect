import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import people from "../assets/data/people.js";
import "../assets/css/cmps/data-cmp.css";

// Define your columns
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "carPlateNumber", headerName: "Car Plate Number", width: 130 },
  { field: "criminal", headerName: "Criminal", width: 130 },
  { field: "time", headerName: "Time", width: 70 },
];
const lastPerson = people[people.length - 1];
const uniquePeople = people.map((lastPerson, index) => ({ ...lastPerson, id: index }));


function DataCmp() {
  return (
    <div className="data-cmp-main">
      <DataGrid
        rows={[lastPerson]} // Array containing just the last person
        columns={columns}
        className="data-cmp-grid"
      />
    </div>
  );
}

export default DataCmp;
