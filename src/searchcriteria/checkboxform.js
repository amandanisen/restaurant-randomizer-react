import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        italian: true,
        asian: false,
        american: false,
    });
  
    const handleChange = (event) => {
      setState({ ...state, [event.target.name]: event.target.checked });
    };
  
    const { italian, asian, american } = state;
    const error = [italian, asian, american].filter((v) => v).length !== 2;
  
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Choose what you are craving</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={italian} onChange={handleChange} name="italian" />}
              label="Italian"
            />
            <FormControlLabel
              control={<Checkbox checked={asian} onChange={handleChange} name="asian" />}
              label="Asian"
            />
            <FormControlLabel
              control={<Checkbox checked={american} onChange={handleChange} name="american" />}
              label="American"
            />
          </FormGroup>
          <FormHelperText>Please select one.</FormHelperText> 
        </FormControl>
        {console.log(state)}

        {/* <FormControl required error={error} component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">You must pick one.</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
              label="Gilad Gray"
            />
            <FormControlLabel
              control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
              label="Jason Killian"
            />
            <FormControlLabel
              control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
              label="Antoine Llorca"
            />
          </FormGroup>
          <FormHelperText>You can display an error</FormHelperText>
        </FormControl> */}
      </div>
    );
  }