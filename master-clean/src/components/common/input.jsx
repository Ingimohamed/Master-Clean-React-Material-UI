import React from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Label from './label';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
  },
 
  }));

const Input = ({ name, label, error, ...rest }) => {
    const classes = useStyles();
    return (
        <FormGroup>
        <Label name={name} label={label}/>
        <input
          {...rest}
          id={name}
          name={name}
        />
           {error && <Alert severity="error">{error}</Alert>} 
      </FormGroup>
     );
}
 
export default Input;