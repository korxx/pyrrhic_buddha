import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import SimpleCard from '../Generic/SimpleCard';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ObjectivesGrid extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={16}>     
            <Grid item>
                <Card>
                    <CardContent>
                        <Typography component="p">
                        Compreender as atividades 
                        <br />
                        do ciclo de vida do software,
                        <br />
                        bem como os diferentes 
                        <br />
                        processos de desenvolvimento.
                        </Typography>
                    </CardContent>
                    </Card>
            </Grid>
            <Grid item>
                <Card>
                <CardContent>
                    <Typography component="p">
                    Dominar os apectos metodológicos 
                    <br />
                    aplicados à análise e projeto
                    <br />
                    de sistemas de informação.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid  item>
                <Card>
                <CardContent>
                    <Typography component="p">
                    Aplicar as técnicas de elaboração,
                    <br />
                    verificação e integração de modelos 
                    <br />
                    empregados na modelagem das 
                    <br /> 
                    propriedades estáticas e dinâmicas 
                    <br/> 
                    de sistemas de informação.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            <Grid item>
                <Card>
                <CardContent>
                    <Typography component="p">
                    Aplicar o conceito de
                    <br />
                    ciclo de vida
                    <br />
                    iterativo e incremental. 
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

ObjectivesGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ObjectivesGrid);
