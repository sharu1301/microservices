import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import AllGallery from "./allGallery";
import ExhibitionGallery from "./exhibition";
import SubFooter from "../../components/subFooter";
import Footer from "../../components/Footer";
import './index.scss';

const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

export default function Gallery() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />
      {/* <h2> Gallery</h2> */}
      <PageTitle title={"Gallery"} />
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginLeft: "100px",
          marginRight: "100px",
          paddingTop: "30px",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered aria-label="">
          <Tab label="All Gallery" />
          <Tab label="Exhibition Gallery" />
          <Tab label="Machine Gallery" />
          <Tab label="Video Gallery" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <AllGallery />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExhibitionGallery />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ExhibitionGallery />
      </TabPanel>

      <TabPanel value={value} index={3}>
        <ExhibitionGallery />
      </TabPanel>
      <SubFooter />
      <Footer />
    </>
  );
}
