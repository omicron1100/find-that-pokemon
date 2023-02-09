import { useEffect } from "react";
import { Card, Paper } from "@mui/material";
import Loading from "./Loading";

const PokemonCard = ({pokeData, loading} : any) => {
  console.log(pokeData);
  return loading ? <Loading /> : (
    <Paper >
      <img src={pokeData.sprites.other["home"].front_default}></img>
    </Paper>
  );
};

export default PokemonCard;
