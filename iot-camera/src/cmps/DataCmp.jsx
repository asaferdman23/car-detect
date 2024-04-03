import React, { useState }from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CardModel from './CardModel';
import "../assets/css/cmps/data-cmp.css";

const columns = [
  { field: "date", headerName: "Date", width: 500 },
  { field: "location", headerName: "Location", width: 300 },
  { field: "name", headerName: "Name", width: 300 },
  { field: "plateNumber", headerName: "Plate Number", width: 300 },
  { field: "suspicious", headerName: "Suspicious", width: 300 },
];

function DataCmp({ people }) {
  console.log("in dataTmp People:", people);
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  let onepeople = people[people.length - 1];
  console.log("onepeople:", onepeople);
// Check if onepeople is defined before calling map
const rows = onepeople ? onepeople.map((person, index) => ({
  ...person,
  id: index, // Ensure each row has a unique id
  date: person.Date, // Assuming 'time' corresponds to 'Date'
  plateNumber: person.PlateNumber, // Ensure field names match column definitions
  name: person.Name,
  location: person.Location,
  suspicious: person.Suspeciouse ? "Yes" : "No", // Convert boolean to string if necessary
})) : [];
  
  // const lastArray = people[people.length - 1];
  // const lastPerson = lastArray[lastArray.length - 1];
  
  // console.log(lastPerson); // Logs the last person from the last array


// console.log(lastPerson); // Logs the last person from the last array

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
        sx={{ fontSize: "25px" }}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
        pageSize={5}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Person Details</DialogTitle>
        <DialogContent className="data-cmp-dialog-content">
          {/* {selectedPerson && (
            <div>
              <CardModel cmp="modal" imageSrc={selectedPerson.imgSrc} />
              <ul>
                {Object.entries(selectedPerson).map(([key, value]) => (
                  <li key={key}>{${key}: ${value}}</li>
                ))}
              </ul>
            </div>
          )} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DataCmp;