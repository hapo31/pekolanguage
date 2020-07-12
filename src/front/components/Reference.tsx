import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
  createStyles,
  Box,
} from "@material-ui/core";

const rows = [
  { from: "+", to: "ｱｯｱｯｱｯ" },
  { from: "-", to: "にーんじん" },
  { from: ">", to: "きｔら" },
  { from: "<", to: "ぺこ" },
  { from: ".", to: "だよ" },
  { from: ",", to: "はぃぃ" },
  { from: "[", to: "ふざけんな" },
  { from: "]", to: "マンッ" },
];

const useStyles = makeStyles(theme =>
  createStyles({
    root: {},
    table: {
      border: "solid 2px silver",
      width: 20,
    },
    row: {
      "&:nth-of-type(even)": {
        backgroundColor: "silver",
      },
    },
    bold: {
      fontWeight: "bold",
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <TableContainer className={classes.root} component={Box}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.bold}>Pekolanguage</TableCell>
            <TableCell className={classes.bold}>Brainf*ck</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.from}>
                <TableCell component="th" scope="row">
                  {row.to}
                </TableCell>
                <TableCell className={classes.bold}>{row.from}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
