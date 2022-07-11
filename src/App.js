import Leftbar from "./components/Leftbar";
import MainCont from "./components/MainCont";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import React from "react";
import { Box, Stack } from "@mui/material";
import Footer from "./components/Footer";
import "./components/style.css"


function App() {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Leftbar />
          <MainCont />
          <Rightbar />
        </Stack>
        <Footer />
      </React.Fragment>
    </>
  );
}

export default App;
