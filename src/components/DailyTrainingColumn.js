import { LinearProgress, TableCell } from "@mui/material";
import TrainingSelect from "./TrainingSelect";

const DailyTrainingColumn = () => {
  return (
    <TableCell>
      <TrainingSelect />
      <TrainingSelect />
      <TrainingSelect />
      <LinearProgress variant={"buffer"} color={"success"} />
    </TableCell>
  );
};

export default DailyTrainingColumn;
