import React, { Component } from 'react';
import "./MainPage.css"
import LeftSide from './LeftSidePanel/LeftSide';
import Grid from "@mui/material/Grid";
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import PostContainer from './PostContainer/PostContainer';
import RightSide from './RightSidePanel/RightSide';

 const Layout = () => {
    return (
        <div className="mainpage_container">
            <Grid container>
                <Grid item xs={3}>
                    <LeftSide />
                </Grid>
                <Grid item xs={6} className="middleContainer">
                    <StatusBar />
                    <UploadSection />
                    <PostContainer />
                </Grid>
                <Grid item xs={3}>
                    <RightSide />
                </Grid>
            </Grid>
        </div>
      );
 }
  
 export default Layout;