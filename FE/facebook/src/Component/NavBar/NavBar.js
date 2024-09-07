import React from 'react';
import Grid from '@mui/material/Grid';
import fblogo from '../../images/Facebook-Logo.png';
import home from '../../images/home.svg';
import video from '../../images/video.svg';
import market from '../../images/market.svg';
import group from '../../images/groups.svg';
import game from '../../images/game.svg';
import "./NavBar.css";
import { Avatar } from '@mui/material';

const NavBar = () => {
    return (
        <div>
            <Grid container className="navbar_main">
                <Grid item xs = {3}>
                    <div className="navbar_leftbar">
                        <img className="navbar_logo" src={fblogo} width="75px" />
                        <input className="navbar_search" type="text" placeholder="Search Facebook" />
                    </div>
                </Grid>
                <Grid item xs = {6}>
                    <div className="navbar_container">
                        <div className="navbar_tabs active">
                            <img src={home} height="35px" width="35px" />
                        </div>
                        <div className="navbar_tabs">
                            <img src={video} height="35px" width="35px" />
                        </div>
                        <div className="navbar_tabs">
                            <img src={market} height="35px" width="35px" />
                        </div>
                        <div className="navbar_tabs">
                            <img src={group} height="35px" width="35px" />
                        </div>
                        <div className="navbar_tabs">
                            <img src={game} height="35px" width="35px" />
                        </div>
                    </div>
                </Grid>
                <Grid item xs = {3}>
                    <div className="navbar_rightbar">
                        <div>
                            <Avatar className="navbar_avatar" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A"/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
        

export default NavBar;