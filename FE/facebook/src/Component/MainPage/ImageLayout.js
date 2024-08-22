import React, { Component } from 'react';
import "./MainPage.css";
import { Avatar } from '@mui/material';

const ImageLayout = (props) => {
    return (
        <div className="imageLayout_container">
            <div className="imageLayout_imglay">
                <Avatar className="imageLayout_avatar" src={props.image}/>
            </div>
            <div className="imageLayout_name">
                {props.text}
            </div>
        </div>
      );
}
 
export default ImageLayout;