import React, { Component } from 'react';
import CustomizedAccordions from './contOrderingAccordion';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AllRights from './AllRights';
import ContOrderReview from './contOrderReview';

const useStyles = theme => ({

});

class ContOrdering extends Component {
    state = {  }
    render() { 
        return ( 
            <Container maxWidth="md" className="pt-5 pb-1">
                <Grid container className="mb-340">
                    <Grid item lg={8} xl={8} md={8} sm={12} xs={12} className="pr2">
                        <CustomizedAccordions />
                    </Grid>
                    <Grid item lg={4} xl={4} md={4} sm={7} xs={7} className="pl2">
                        <ContOrderReview/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                    <AllRights/>
                    </Grid>
                </Grid>
            </Container>
         );
    }
}
 
export default withStyles(useStyles) (ContOrdering);