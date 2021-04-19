import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
    },
  },
 
  }));

const Label = ({ name, label,className }) => {
    return (
        <label htmlFor={name} align="left" className={className}>
          { label }
        </label>
     );
}
 
export default Label;