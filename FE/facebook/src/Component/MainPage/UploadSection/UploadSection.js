import { Paper, Avatar } from "@mui/material";
import "./UploadSection.css";
import live from "../../../images/live.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feeling.png";

const UploadSection = () => {
    return ( 
        <div>
            <Paper className="upload_container">
            <div className="upload_top">
                <div>
                    <Avatar className="upload_img" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A" />
                </div>
                <div>
                    <input className="upload_box" placeholder="What's on your mind ?" type="text" />
                </div>
            </div>
            <div className="upload_bottom">
                <div className="upload_tabs">
                    <img src={live} width="35px" />
                    <div className="upload_text">Live Video</div>
                </div>
                <div className="upload_tabs">
                    <img src={image} width="35px" />
                    <div className="upload_text">Photo/Video</div>
                </div>
                <div className="upload_tabs">
                    <img src={feeling} width="35px" />
                    <div className="upload_text">Feeling/Activity</div>
                </div>
            </div>
            </Paper>
        </div>
     );
}
 
export default UploadSection;