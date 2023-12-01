import React from "react";
import { Header } from "../../components";

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AllGallery from "../../components/gallery/allGallery";
import Exhibition from "../../components/gallery/exhibition";


const TabPanel = ({ value, index, children }) => (
    <div hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );

export default function Gallery(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return(
        <>
          <Header />
         {/* <h2> Gallery</h2> */}

         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} centered aria-label="wrapped label tabs example">
        <Tab label="All Gallery" />
        <Tab label="Exhibition Gallery" />
        <Tab label="Machine Gallery" />
        <Tab label="Video Gallery" />
      </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
         <AllGallery/>
      </TabPanel>
      <TabPanel value={value} index={1}>
       <Exhibition/>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Exhibition/>
      </TabPanel>

      <TabPanel value={value} index={3}>
         <Exhibition/>
      </TabPanel>
    
        </>
    )
}