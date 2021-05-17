import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

 
  }));

const Select = ({ name, label, error, ...rest }) => {
    const classes = useStyles();
    return (
      <FormControl className="selectFormControl pr">
          <NativeSelect
            {...rest}
            id={name}
            value={month}
            name={name}
            >
                <option selected value={10}>- Choose months -</option>
                <option value={20}>January</option>
                <option value={30}>February</option>
                <option value={40}>March</option>
                <option value={50}>April</option>
                <option value={60}>May</option>
                <option value={70}>June</option>
                <option value={80}>July</option>
                <option value={90}>August</option>
                <option value={100}>September</option>
                <option value={110}>October</option>
                <option value={120}>November</option>
                <option value={130}>December</option>
          </NativeSelect>
          {error && <Alert severity="error">{error}</Alert>} 
        </FormControl>
     );
}
 
export default Select;