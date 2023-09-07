import { Grid } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeSection from "../HomeSection/HomeSection";
import Navigation from "../Navigation/Navigation";
import Profile from "../Profile/Profile";
import RightPart from "../RightPart/RightPart";

const HomePage = () => {
  return (
    <Grid container xs={12} className='px-5 lg:px-36 justify-between'>
      <Grid item xs={0} lg={2.5} className='hidden lg:block w-full relative'>
        <Navigation />
      </Grid>
      <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
        <Routes>
          <Route path='/' element={<HomeSection />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
        </Routes>
      </Grid>
      <Grid item xs={0} lg={3} className='hidden lg:block w-full relative'>
        <RightPart />
      </Grid>
    </Grid>
  );
};

export default HomePage;
