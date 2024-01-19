import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import AllGallery from "./allGallery";
import ExhibitionGallery from "./exhibition";
import VideoGallery from "./video";
import SubFooter from "../../components/subFooter";
import Footer from "../../components/Footer";
import "./index.scss";
import axios from "axios";
import MachineGallery from "./machineGallery";
const TabPanel = ({ value, index, children }) => (
  <div hidden={value !== index}>
    {value === index && <Box p={3}>{children}</Box>}
  </div>
);

interface Picture {
  id: number;
  name: string;
  url: string;
}
export default function Gallery() {
  const [value, setValue] = React.useState(0);
  const exposureURL = process.env.REACT_APP_EXPOSURE_URL;
  // const [allImages, setAllImages] = useState([]);
  const [exhibitionImages, setExhibitionImages] = useState([]);
  const [machineryImages, setMachineryImages] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [pictures, setPictures] = useState<Picture[]>([]);
  useEffect(() => {
    getGalleryImages();
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getGalleryImages = () => {
    let tempVideos: any = [];
    let temExhibitionGallery: any = [];
    let tempMachinery: any = [];
    axios.get(`${exposureURL}/our-gallery`).then((response) => {
      const groups = response?.data?.groups;
      // setAllImages(response?.data?.groups);
      groups.forEach((group: any) => {
        if (group.title === "Exhibition Gallery") {
          temExhibitionGallery = temExhibitionGallery.concat(
            group.photos.map((image) => ({
              url: image.url,
            }))
          );
        }
        if (group.title === "Machine Gallery") {
          tempMachinery = tempMachinery.concat(
            group.photos.map((image) => ({
              url: image.url,
            }))
          );
        }
        if (group.type === "native-video") {
          // Extract videos from the group and add them to tempVideos
          tempVideos = tempVideos.concat(
            group.photos.map((video) => ({
              id: video.id,
              url: video.url,
              caption: video.caption,
            }))
          );
        }
      });
      setAllVideos(tempVideos);
      setExhibitionImages(temExhibitionGallery);
      setMachineryImages(tempMachinery);
      setPictures([...tempMachinery, ...tempVideos, ...temExhibitionGallery]);
    });
  };
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
        <AllGallery pictures={pictures} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExhibitionGallery imageData={exhibitionImages} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MachineGallery imageData={machineryImages} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <VideoGallery videoData={allVideos} />
      </TabPanel>
      <SubFooter />
      <Footer />
    </>
  );
}