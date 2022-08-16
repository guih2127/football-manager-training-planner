import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DailyTrainingColumn from "./DailyTrainingColumn";

const WeekTrainingTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Segunda-Feira</TableCell>
            <TableCell>Terça-Feira</TableCell>
            <TableCell>Quarta-Feira</TableCell>
            <TableCell>Quinta-Feira</TableCell>
            <TableCell>Sexta-Feira</TableCell>
            <TableCell>Sábado</TableCell>
            <TableCell>Domingo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <DailyTrainingColumn />
            <DailyTrainingColumn />
            <DailyTrainingColumn />
            <DailyTrainingColumn />
            <DailyTrainingColumn />
            <DailyTrainingColumn />
            <DailyTrainingColumn />
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeekTrainingTable;
