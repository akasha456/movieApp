import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Bar = () => {
const [value, setValue] = React.useState(0);
  return (
    <div><Box sx={{ width: 900 }}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Details" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Register" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Result" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Box>
</div>
  )
}

export default Bar