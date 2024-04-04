import React, { useState }from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CardModel from './CardModel';
import "../assets/css/cmps/data-cmp.css";
const currentDateTime = new Date().toLocaleString();
console.log(currentDateTime);
const columns = [
  { field: "date", headerName: "Date", width: 500 },
  { field: "location", headerName: "Location", width: 500 },
  { field: "eventName", headerName: "Event", width: 400 },
  { field: "suspicious", headerName: "Suspicious", width: 400 },
];

const dummyPeople = [
  {
    Date:`${currentDateTime}`,
    EventName: "Motion",
    Location: "Halo_Sensor_Toha",
    Suspeciouse: true,
  },
  {
    Date:`${currentDateTime}`,
    EventName: "Motion",
    Location: "Halo_Sensor_Toha",
    Suspeciouse: true,
  },
  // Add more objects for more rows
];

function SensorDataCmp({ people = dummyPeople}) {
  console.log("in dataTmp People:", people);
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

//   let onepeople = people[people.length - 1];
//   console.log("onepeople:", onepeople);
// Changing the flat()...
const rows = people ? people.map((person, index) => ({
  ...person,
  id: index, // Ensure each row has a unique id
  date: person.Date, // Assuming 'time' corresponds to 'Date'
  eventName: person.EventName, // Ensure field names match column definitions
  location: person.Location,
  suspicious: person.Suspeciouse ? "Yes" : "No", // Convert boolean to string if necessary
})) : [];
  
  const handleRowClick = (params) => {
    setSelectedPerson(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sensor-data-cmp">
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

export default SensorDataCmp;