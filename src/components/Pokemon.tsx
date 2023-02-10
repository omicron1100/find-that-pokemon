import { useEffect } from "react";
import { Box, Card, Paper } from "@mui/material";
import Loading from "./Loading";

const PokemonCard = ({pokeData, loading} : any) => {
  console.log(pokeData);
  return !pokeData ? <Loading /> : (
    <Box>
      <Paper style={{backgroundColor: '#555', borderRadius: '8px'}}>
        <img src={pokeData.sprites.other["home"].front_default} style={{padding: '20x'}}></img>
      </Paper>
    </Box>
  );
};

export default PokemonCard;
