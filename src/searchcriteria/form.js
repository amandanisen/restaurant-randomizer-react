import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Checkbox from './checkboxform';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
}));

//array of miles to choose
const options = [
  '5 mi',
  '15 mi',
  '25 mi'
];
// Location
// How far are you willing to travel
// Type of food
// Budget



export default function Form() {
  const [travelDistance, setTravelDistance] = useState("");

  const [foodType, setFoodType] = useState("");
  const [budget, setBudget] = useState("");

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {   
    setSelectedIndex(index);
    setAnchorEl(null);
    setTravelDistance(options[index])
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Distance settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="Select the distance"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Distance to travel" secondary={options[selectedIndex]} />
          {console.log(travelDistance)}

        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          
          <MenuItem
            key={option}            
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
           
            {option}
          </MenuItem>
        
        ))}
      </Menu>
      <Checkbox />
    </div>
  );
  
}
