import { useEffect, useState } from "react";
import axios from "axios";
import { LocationAreaData, LocationData, PokemonData, PokemonEncounters } from "./interfaces";
import Pokemon from "./components/Pokemon";
import "./App.css";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  NativeSelect,
  TextField,
} from "@mui/material";
import Party from "./components/Party";
import EncounterList from "./components/PossibleEncounters";

const url = "https://pokeapi.co/api/v2/";
const numPokemon = 1008;

function App() {
  const [regionName, setRegionName] = useState("");
  const [locationData, setLocationData] = useState<LocationData>();
  const [areaData, setAreaData] = useState<LocationAreaData>();
  const [locationName, setLocationName] = useState("");
  const [areaName, setAreaName] = useState("");
  const [party, setParty] = useState<Array<any>>([]);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [encounters, setEncounters] = useState<any>([]);

  const fetchPokemon = async (id: string | number) => {
    setLoading(true);
    axios.get(url + "pokemon/" + id).then((res: any) => {
      setPokemon(res.data);
    });
    setLoading(false);
  };

  const fetchLocation = async (id: string | number) => {
    setLoading(true);
    const res = await axios.get(url + "location/" + id);
    console.log(res.data);
    setLocationData(res.data);
    setLoading(false);
  };

  const fetchArea = async (id: string | number) => {
    setLoading(true);
    const res = await axios.get(url + "location-area/" + id);
    setAreaData(res.data);
    setLoading(false);
  };

  const fetchEncounters = async (pokeList : any) => {
    const promises = pokeList.map((encounter : any) => 
      axios.get(encounter.pokemon.url)
    );
    Promise.all(promises).then(results => 
      setEncounters(results.map(res => res.data)));
  };

  //Initial load
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetchLocation("pallet-town");
      await fetchArea(locationData.areas[0].name);
      await fetchEncounters(areaData.pokemon_encounters);
    }
    fetchData();
    console.log(encounters);
    setLocationName(!locationData ? "" : locationData.names[1].name);
    setRegionName(!locationData ? "" : locationData.region.name);
    setAreaName(!areaData ? "" : areaData.names[0].name);
    setLoading(false);
  }, []);

  return loading ? (
    <>Loading...</>
  ) : (
    <div className="App">
     
    </div>
  );
}

function encounterPokemon() {}

export default App;
