import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { LocationAreaData, PokemonData } from "../interfaces";

type EncounterListProps = {
  encounterList: Array<PokemonData>,
  loading: boolean
}

const EncounterList : React.FC<EncounterListProps> = ({encounterList, loading}) : JSX.Element => {
  console.log(encounterList);

  if(!encounterList || encounterList.length == 0)
    return (
      <Box>Looks like there's nothing here! Look somewhere else.</Box>
    )

  return loading ? <>Loading...</> : (
    <Grid2>
      <p>Possible Pokemon:</p>
      {encounterList.map((encounter) => 
          <img
            src={`${encounter.sprites.front_default}`}
            alt={encounter.name}
            loading="lazy"
          />
      )}
    </Grid2>
  );
};

export default EncounterList;
