import { Autocomplete, Box, Container, Paper, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { LocationData, LocationAreaData, RegionData } from "../interfaces";

type LocationAreaSelectProps = {
  newLocation: string;
  setNewLocation: Dispatch<SetStateAction<string>>;
  newArea: string;
  setNewArea: Dispatch<SetStateAction<string>>;
  regionData: RegionData;
  locationData: LocationData;
  fetchLocation: (id: string | number) => void;
  fetchArea: (id: string | number) => void;
};

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
    <Container>
      <Paper>
        <Autocomplete
          disablePortal
          id="locations"
          value={newLocation}
          onChange={(event, newValue) => {
            !newValue
              ? null
              : (setNewLocation(newValue), fetchLocation(newValue));
          }}
          options={
            !regionData
              ? []
              : regionData.locations.map(
                  (location: { name: string; url: string }) => location.name
                )
          }
          fullWidth={true}
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
          fullWidth={true}
          renderInput={(params) => <TextField {...params} label="Area" />}
        />
      </Paper>
    </Container>
  );
};

export default LocationAreaSelect;
