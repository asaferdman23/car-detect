import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import wantedPeople_data from "../assets/data/wanted.js"; // adjust the path to your json file

export default function WantedPicCard() {
  const firstPersonImgSrc = wantedPeople_data.people[0].imgSrc;

  return (
    <Card>
      <CardHeader title="" subheader="September 14, 2016" />
      <CardMedia
        component="img"
        image={firstPersonImgSrc} // use the image property from the JSON object
        alt="wanted"
      />
    </Card>
  );
}
