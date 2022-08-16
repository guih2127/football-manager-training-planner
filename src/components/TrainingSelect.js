import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import * as React from "react";
import PortugueseTrainingList from "../optionLists/PortugueseTrainingList";

const TrainingSelect = () => {
  const options = PortugueseTrainingList;
  return (
    <Box marginBottom={1.5} minWidth={300} maxWidth={300}>
      <Autocomplete
        id="grouped-demo"
        options={options.sort((a, b) => -b.type.localeCompare(a.type))}
        groupBy={(option) => option.type}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Treinos" />}
      />
    </Box>
  );
};

export default TrainingSelect;
