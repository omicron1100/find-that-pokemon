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
import Party from "./components/Party";
import EncounterList from "./components/PossibleEncounters";
import Loading from "./components/Loading";

const url = "https://pokeapi.co/api/v2/";
const numPokemon = 1008;

function App() {
  const [regionName, setRegionName] = useState("");
  const [regionData, setRegionData] = useState<any>();
  const [locationData, setLocationData] = useState<any>();
  const [areaData, setAreaData] = useState<any>();
  const [locationName, setLocationName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [party, setParty] = useState<Array<any>>([]);
  const [pokeId, setPokeId] = useState(getRandomId());
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [encounters, setEncounters] = useState<any>([]);
  const [newLocation, setNewLocation] = useState<string>();
  const [hintVisible, setHintVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenResult = () => {
    setOpenModal(true);
  };
  const handleCloseResult = () => {
    setOpenModal(false);
  };

  const fetchPokemon = async (pokeId: number) => {
    setLoading(true);
    const pokedat = await axios.get(url + "pokemon/" + pokeId);
    setPokemon(pokedat.data);
    // console.log(res.data);
    setLoading(false);
  };

  const fetchRegion = async (id: string | number) => {
    try {
      const reg = await axios.get(url + "region/" + id);
      setRegionData(reg.data);
      setRegionName(reg.data.names[5].name);
      // await fetchLocation(reg.data.locations[0].name);
    } catch (error) {
      console.log(error);
    }
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

  //fetch area and populate encounters
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
    fetchRegion(1);
    fetchPokemon(pokeId);
    fetchLocation("pallet-town");
    // fetchArea("pallet-town-area");
    setLoading(false);
  }, []);

  const comparePokemon = (comp: string | number) => {
    const result = encounters.find(({id}) => id == comp);
    if(result)
      return true;
    else
      return false;
  };

  return !(pokemon && areaData) || loading ? (
    <Loading />
  ) : (
    <div className="App">
      <AppBar>Where's That Pokemon?</AppBar>

      <Box>Region: {regionName}</Box>
      <Box>You are in {areaName}.</Box>
      <Box>
        <p>Find this Pokemon!</p>
        <Pokemon pokeData={pokemon} loading={loading} />

        <Button onClick={handleOpenResult}>Found It!</Button>
        <Modal
          open={openModal}
          onClose={handleCloseResult}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              { comparePokemon(pokemon.id) ? "You found it! Congratulations!" :
                "Sorry, look somewhere else!"
              }
            </Typography>
          </Box>
        </Modal>

        <Button
          onClick={() => {
            fetchPokemon(getRandomId());
          }}
        >
          Search for Different Pokemon
        </Button>

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
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Location" />}
        />
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
