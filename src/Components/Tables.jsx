import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const rows = [
  { 
    Moviename: 'House of the Dragon', 
    Director: 'Rachel Kondo', 
    category: 'Historical drama', 
    releaseyear: '2024' 
  },
  { 
    Moviename: 'The Boys', 
    Director: 'Eric Kripke', 
    category: 'Superhero', 
    releaseyear: '2019'
  },
  {
    Moviename: 'Suits', 
    Director: 'Aaron Korsh', 
    category: 'Legal drama', 
    releaseyear: '2011'
  },
  { 
    Moviename: 'Attack on Titan', 
    Director: 'Hajime Isayama', 
    category: 'Action, Dark fantasy', 
    releaseyear: '2013'
  },
];

const Tables =()=> {
  return (
    <TableContainer component={Paper} sx={{ width: '100%', overflowX: 'auto' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Moviename</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Release Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Moviename}
              </TableCell>
              <TableCell align="right">{row.Director}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.releaseyear}</TableCell>
              <TableCell align="right">{row.image}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Tables;
