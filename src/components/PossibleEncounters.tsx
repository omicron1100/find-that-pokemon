import { Box } from "@mui/material";
import { LocationAreaData } from "../interfaces";

const EncounterList = (encounterList: any) => {
    
  return (
    <Box>
      <p>Possible Pokemon:</p>
      {encounterList.map((encounter: any) => (
          <img
            src={`${encounter.pokemon.url}`}
            alt={encounter.pokemon.name}
            loading="lazy"
          />
      ))}
    </Box>
  );
};

export default EncounterList;
