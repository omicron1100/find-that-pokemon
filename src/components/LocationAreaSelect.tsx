import { Autocomplete, Box, Container, Paper, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { LocationData, LocationAreaData, RegionData } from "../interfaces";

type LocationAreaSelectProps = {
  newLocation: string;
  setNewLocation: Dispatch<SetStateAction<string>>;
  newArea: string;
  setNewArea: Dispatch<SetStateAction<string>>;
  regionData: RegionData | undefined;
  locationData: LocationData | undefined;
  fetchLocation: (id: string | number) => void;
  fetchArea: (id: string | number) => void;
};

function capitalizeName (name : string) {
    let newName = name.split("-");
    newName.forEach((word) => word[0].toUpperCase() + word.substring(1));
    return newName.join(" ");
}

const LocationAreaSelect = (props : LocationAreaSelectProps) => {
  const {
    newLocation,
    setNewLocation,
    newArea,
    setNewArea,
    regionData,
    locationData,
    fetchLocation,
    fetchArea,
  } = props;

  return (
    <Container style={{}}>
      <Paper style={{justifyContent: "space-between"}}>
        <Autocomplete
          disablePortal
          id="locations"
          value={newLocation}
          onChange={(event, newValue) => {
            !newValue ? null
              : (setNewLocation(newValue), fetchLocation(newValue));
          }}
          options={
            !regionData
              ? []
              : regionData.locations.map(
                  (location: { name: string; url: string }) => location.name
                )
          }
          style={{padding: 10}}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />

        <Autocomplete
          disablePortal
          id="areas"
          value={newArea}
          onChange={(event, newValue) => {
            !newValue ? null : (setNewArea(newValue), fetchArea(newValue));
          }}
          options={
            !locationData
              ? []
              : locationData.areas.map(
                  (area: { name: string; url: string }) => area.name
                )
          }
          style={{padding: 10}}
          renderInput={(params) => <TextField {...params} label="Area" />}
        />
      </Paper>
    </Container>
  );
};

export default LocationAreaSelect;
