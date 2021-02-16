import React, { Component } from 'react';
import ControlledAccordions from './contOrderingAccordion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const useStyles = theme => ({

});

class ContOrdering extends Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Grid container>
                    <Grid item lg={8} xl={8} md={12}>
                        <ControlledAccordions />
                    </Grid>
                    <Grid item lg={4} xl={4} md={7}></Grid>
                </Grid>
            </Container>
         );
    }
}
 
export default withStyles(useStyles) (ContOrdering);