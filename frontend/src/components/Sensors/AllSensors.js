import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AccordionCard from './OneSensorAccordion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Sensor 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={10}
                lightValue={10}
                pressureValue={10}
                humidityValue={10}
                soundValue={10}
            />
        </AccordionDetails>
      </Accordion>


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Sensor 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={20}
                lightValue={20}
                pressureValue={20}
                humidityValue={20}
                soundValue={20}
            />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Sensor 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={30}
                lightValue={30}
                pressureValue={30}
                humidityValue={30}
                soundValue={30}
            />
        </AccordionDetails>
      </Accordion>
            
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Sensor 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={40}
                lightValue={40}
                pressureValue={40}
                humidityValue={40}
                soundValue={40}
            />
        </AccordionDetails>
      </Accordion>
            
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>Sensor 5</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={50}
                lightValue={50}
                pressureValue={50}
                humidityValue={50}
                soundValue={50}
            />
        </AccordionDetails>
      </Accordion>
            
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>Sensor 6</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <AccordionCard 
                temparatureValue={60}
                lightValue={60}
                pressureValue={60}
                humidityValue={60}
                soundValue={60}
            />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
