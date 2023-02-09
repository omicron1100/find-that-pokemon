import { Box } from "@mui/material";
import { LocationAreaData } from "../interfaces";

const EncounterList = ({encounterList, loading} : any) => {
  console.log(encounterList);
  return loading ? <>Loading...</> : (
    <Box>
      <p>Possible Pokemon:</p>
      {encounterList.map((encounter: any) => 
          <img
            src={`${encounter.sprites.front_default}`}
            alt={encounter.name}
            loading="lazy"
          />
      )}
    </Box>
  );
};

export default EncounterList;
