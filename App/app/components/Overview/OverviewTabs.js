import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import StarIcon from '@material-ui/icons/Star';
import Typography from '@material-ui/core/Typography';

import  ObjectivesGrid from './ObjectivesGrid';
import styles from './OverviewTabs.css'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

export default class IconTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    const { value } = this.state;
    return (
    
      <Paper square style={{ width: '100%', 'padding':'2rem', 'backgroundColor':'#fafafa', 'color':'black'}}>
      <h3><strong>DISCIPLINA:</strong> Projeto e Desenvolvimento de Software</h3>
        <h3><strong>CÓDIGO:</strong> 4637C-04 <strong>CRÉDITOS:</strong> 04</h3>
        <h3><strong>CARGA HORÁRIA:</strong> 60 horas-aula</h3>
        <hr/>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          centered
          indicatorColor="secondary"
          textColor="secondary"

        >
          <Tab icon={<LinearScaleIcon />} label="OBJECTIVES" />
          <Tab icon={<ScatterPlotIcon />} label="CONTEXT" />
          <Tab icon={<StarIcon />} label="EVALUATION" />
        </Tabs>
        {value === 0 && <TabContainer><ObjectivesGrid/></TabContainer>}
        {value === 1 && 
          <TabContainer>
          </TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}

        
        </Paper>
       
      
    );
  }
}
