import React, { useState } from 'react';
import { TextField, Button, Box, Grid } from '@mui/material';

function Add() {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    sem: ''
  });
  const [count, setCount] = useState(0);

  const valueAdd = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '16px' }}
      onSubmit={handleSubmit}
    ><br></br>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Moviename"
            variant="filled"
            value={formData.name}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="department"
            name="department"
            label="Director"
            variant="filled"
            value={formData.department}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="sem"
            name="sem"
            label="Category"
            variant="filled"
            value={formData.sem}
            onChange={handleChange}
            InputProps={{ sx: { backgroundColor: 'white' } }}
            InputLabelProps={{ sx: { color: 'black' } }}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="success" onClick={valueAdd}>
        Submit
      </Button><br></br>
      
    </Box>
  );
}

export default Add;