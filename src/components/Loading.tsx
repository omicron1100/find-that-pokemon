import { Box } from "@mui/material";
import pokeball from "../assets/pokeball.png";
import "./Loading.css";

const Loading = () => {
  return (
    <Box>
        <img src={pokeball}></img>
    </Box>
  );
};

export default Loading;
