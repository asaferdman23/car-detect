import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import people from "../assets/data/people.js";
import "../assets/css/cmps/data-cmp.css";
import CardContainer from "./CardContainer.jsx";
import CardModel from "./CardModel.jsx";


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
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  console.log(selectedPerson);
  const handleRowClick = (params) => {
    setSelectedPerson(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="data-cmp-main">
      <DataGrid
        rows={[lastPerson]}
        columns={columns}
        onRowClick={handleRowClick}
        pageSize={5}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Person Details</DialogTitle>
        <DialogContent className="data-cmp-dialog-content">
          {/* Render the selected person's details here. For example: */}
          {selectedPerson && (
            <div>
              <CardModel cmp="modal" imageSrc={selectedPerson.imageSrc} person={selectedPerson} />
              <p>ID: {selectedPerson.id}</p>
              <p>Name: {selectedPerson.name}</p>
              <p>Car Plate Number: {selectedPerson.carPlateNumber}</p>
              <p>Criminal: {selectedPerson.criminal ? "Yes" : "No"}</p>
              <p>Time: {selectedPerson.time}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DataCmp;