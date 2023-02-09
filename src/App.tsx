import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  LocationAreaData,
  LocationData,
  PokemonData,
  PokemonEncounters,
} from "./interfaces";
import Pokemon from "./components/Pokemon";
import "./App.css";
import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  Menu,
  MenuItem,
  Modal,
  NativeSelect,
  TextField,
  Typography,
} from "@mui/material";
// import Party from "./components/Party";
import EncounterList from "./components/PossibleEncounters";
import Loading from "./components/Loading";

const url = "https://pokeapi.co/api/v2/";
const numPokemon = 151;
const regions = [
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
  "hisui",
  "paldea",
];

// TODO: Properly define TypeScript types

function App() {
  //fetched data is stored in these
  const [regionData, setRegionData] = useState<any>();
  const [locationData, setLocationData] = useState<any>();
  const [areaData, setAreaData] = useState<any>();

  const [regionName, setRegionName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [areaName, setAreaName] = useState("");

  const [newRegion, setNewRegion] = useState("kanto");
  const [newLocation, setNewLocation] = useState("pallet-town");
  const [newArea, setNewArea] = useState("pallet-town-area");

  // const [party, setParty] = useState<Array<any>>([]);
  const [pokeId, setPokeId] = useState(getRandomId());
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [encounters, setEncounters] = useState<any>([]);
  const [hintVisible, setHintVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  //
  const [buttonAnchor, setButtonAnchor] = useState<null | HTMLElement>(null);
  const [numFound, setNumFound] = useState(0);

  const handleOpenResult = () => {
    setOpenModal(true);
  };
  const handleCloseResult = () => {
    setOpenModal(false);
  };

  const regionMenuOpen = Boolean(buttonAnchor);

  const handleRegionClick = (e: React.MouseEvent<HTMLElement>) => {
    setButtonAnchor(e.currentTarget);
  };

  const fetchPokemon = async (pokeId: number) => {
    setLoading(true);
    const pokedat = await axios.get(url + "pokemon/" + pokeId);
    setPokemon(pokedat.data);
    // console.log(res.data);
    setLoading(false);
  };

  const fetchRegion = async (id: string | number) => {
    setLoading(true);
    try {
      const reg = await axios.get(url + "region/" + id);
      setRegionData(reg.data);
      setRegionName(reg.data.names[5].name);
      // await fetchLocation(reg.data.locations[0].name);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchLocation = async (id: string | number) => {
    setLoading(true);
    try {
      const loc = await axios.get(url + "location/" + id);
      setLocationData(loc.data);
      setLocationName(loc.data.names[1].name);
      await fetchArea(loc.data.areas[0].name);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  //populate encounters
  const fetchArea = async (id: string | number) => {
    try {
      const area = await axios.get(url + "location-area/" + id);
      setAreaData(area.data);
      setAreaName(area.data.names[0].name);

      //populate encounters
      const promises = area.data.pokemon_encounters.map((encounter: any) =>
        axios.get(encounter.pokemon.url)
      );
      Promise.all(promises).then((results) =>
        setEncounters(results.map((res) => res.data))
      );
    } catch (error) {
      console.log(error);
    }
  };

  //Initial load
  useEffect(() => {
    setLoading(true);
    fetchRegion(newRegion);
    fetchPokemon(pokeId);
    fetchLocation(newLocation);
    // fetchArea("pallet-town-area");
    setLoading(false);
  }, [newRegion]);

  const comparePokemon = (comp: string | number) => {
    const result = encounters.find(({ id }) => id == comp);
    if (result) return true;
    else return false;
  };

  return !(pokemon && areaData) || loading ? (
    <Loading />
  ) : (
    <div className="App">
      <AppBar>Where's That Pokemon?</AppBar>

      {/* TODO: Move Pokemon and Location Selection buttons to their own components*/}
      <Box>
        Region:
        <Button
          id="region-button"
          aria-controls={regionMenuOpen ? "region-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={regionMenuOpen ? "true" : undefined}
          onClick={handleRegionClick}
        >
          {regionName}
        </Button>
        {/* <Menu
          id="region-menu"
          anchorEl={buttonAnchor}
          open={regionMenuOpen}
          onClose={() => {
            setButtonAnchor(null);
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {regions.map((region, index) => (
            <MenuItem
              key={index}
              onClick={() => {
                setButtonAnchor(null);
                setNewRegion(region);
                fetchRegion(region);
              }}
            >
              {region}
            </MenuItem>
          ))}
        </Menu> */}
      </Box>

      <Box>You are in {areaName}.</Box>

      <Box>
        <p>Find this Pokemon!</p>
        <Pokemon pokeData={pokemon} loading={loading} />

        <Box>
          <Button variant="outlined" onClick={handleOpenResult}>
            Found It!
          </Button>
          <Modal
            open={openModal}
            onClose={handleCloseResult}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute" as "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#000",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {comparePokemon(pokemon.id)
                  ? (setNumFound(numFound + 1),
                    "You did it! You found " + pokemon.name + "!")
                  : "Sorry, look somewhere else!"}
              </Typography>
              <Typography id="modal-modal-description">
                You have found {numFound} Pokemon.
              </Typography>
            </Box>
          </Modal>

          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              fetchPokemon(getRandomId());
            }}
          >
            Search for Different Pokemon
          </Button>
        </Box>

        <div style={{}}>
          <Autocomplete
            disablePortal
            id="locations"
            value={newLocation}
            onChange={(event: any, newValue: string) => {
              setNewLocation(newValue);
              fetchLocation(newValue);
            }}
            options={
              !regionData
                ? []
                : regionData.locations.map(
                    (location: { name: string; url: string }) => location.name
                  )
            }
            fullWidth={true}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Location" />}
          />

          <Autocomplete
            disablePortal
            id="areas"
            value={newArea}
            onChange={(event: any, newValue: string) => {
              setNewArea(newValue);
              fetchArea(newValue);
            }}
            options={
              !locationData
                ? []
                : locationData.areas.map(
                    (area: { name: string; url: string }) => area.name
                  )
            }
            fullWidth={true}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Area" />}
          />
        </div>
      </Box>

      <Button onClick={() => setHintVisible(!hintVisible)}>Show Hint?</Button>
      {hintVisible && (
        <EncounterList encounterList={encounters} loading={loading} />
      )}
    </div>
  );
}

function getRandomId() {
  return Math.floor(Math.random() * numPokemon) + 1;
}

export default App;
