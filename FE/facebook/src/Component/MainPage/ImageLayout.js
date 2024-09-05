import React, { Component } from 'react';
import "./MainPage.css";
import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';

const ImageLayout = (props) => {
    return (
        <div className="imageLayout_container">
            
            <div className="imageLayout_imglay">
                <Badge sx={{ 
                        '& .MuiBadge-dot': {
                            backgroundColor: '#90ee90',
                        }
                    }} variant="dot" badgeContent=" " invisible={!props.status}>
                    <Avatar className="imageLayout_avatar" src={props.image}/>
                </Badge>
            </div>
            <div className="imageLayout_name">
                {props.text}
            </div>
        </div>
      );
}
 
export default ImageLayout;