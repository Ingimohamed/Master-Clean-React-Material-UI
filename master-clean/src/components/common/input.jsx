import React from 'react';
import FormGroup from "@material-ui/core/FormGroup";
import Alert from '@material-ui/lab/Alert';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const Input = ({ name, label, value, onChange, type, error }) => {
    const classes = useStyles();
    return (
        <FormGroup>
        <label htmlFor={name} align="left" className="label">
          { label }
        </label>
        <input
          value={value}
          onChange={onChange}
          type={type}
          id={name}
          name={name}
          className="form-control"
         />
           {error && <Alert severity="error">{error}</Alert>} 
      </FormGroup>
     );
}
 
export default Input;