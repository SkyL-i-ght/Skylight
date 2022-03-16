import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import DestinationCard from '../components/DestinationCard.jsx'


export default function DataView(props){
  return (
      <div className="accordian">
          <Typography margin="20px" className="myDests" component="h1" variant="h5">
            My destinations
          </Typography>
          <DestinationCard/>
          <DestinationCard/>
          <DestinationCard/>
          <DestinationCard/>
          <DestinationCard/>
      </div>
  )  
}