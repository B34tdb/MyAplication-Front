import SwipeableTemporaryDrawer from "../../components/menu/menu";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const currencies = [
  {
    value: "USD",
    label: "$asdasasdas",
  },
  {
    value: "EUR",
    label: "€asdasdas",
  },
  {
    value: "BTC",
    label: "฿asdasda",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

function Sra() {
  return (
    <>
      <SwipeableTemporaryDrawer />

      <TableContainer component={Paper}>
        <Table  aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Projeto</TableCell>
              <TableCell>Atividade</TableCell>
              <TableCell>descrição</TableCell>
              <TableCell>Segunda</TableCell>
              <TableCell>Terça</TableCell>
              <TableCell>Quarda</TableCell>
              <TableCell>Quinta</TableCell>
              <TableCell>Sexta</TableCell>
              <TableCell>Sabado</TableCell>
              <TableCell>Domingo</TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
            {Array.from({ length: 10 }).map((_, index) => (
              <TableRow
                key={index}
                
                sx={{
                  "&:last-child td, &:last-child th": { border: 0, width: '75ch'  },
                }}
              >
                <TableCell component="th">
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                </TableCell>

                <TableCell>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    defaultValue="EUR"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                  {/* <TableCell >
                   <TextField

                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                   <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell >
                    <TextField
                      id="outlined-basic"
                      label="Outlined"
                      variant="outlined"
                    />
                  </TableCell> */}
                </TableCell> 
              </TableRow> 
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
export default Sra;
