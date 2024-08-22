import { Avatar, Paper } from "@mui/material";
import "./PostContainer.css";
import like from "../../../images/like.png"
import likebutton from "../../../images/likebutton.png"
import comment from "../../../images/comment.png"
import share from "../../../images/share.png"

const Post = () => {
    return ( 
        <div>
            <Paper className="post_container">
                {/* header */}
                <div className="post_header">
                    <div className="post_header_avatar">
                        <Avatar className="post_avatar" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A" />
                    </div>
                    <div className="post_header_name">
                        Lư Quân
                    </div>
                </div>
                {/* description */}
                <div className="post_description">
                    Hello World!
                </div>
                {/* image */}
                <div className="post_image">
                    <img width="600px" src="https://i.pinimg.com/736x/cc/6a/c7/cc6ac70a44e912067cafe760623266b1.jpg" />
                </div>
                {/* like count */}
                <div className="post_likecountContainer">
                    <div className="post_like">
                        <img className="post_img" src={like} />
                    </div>
                    <div className="post_likecount">
                        25
                    </div>
                </div>
                {/* like comment share */}
                <div className="post_likeShare">
                    <div className="post_tab">
                        <div className="post_tabHead">
                            <img className="post_tabIcon" src={likebutton} />
                        </div>
                        <div className="post_tabText">
                            Like
                        </div>
                    </div>
                    <div className="post_tab">
                        <div className="post_tabHead">
                            <img className="post_tabIcon" src={comment} />
                        </div>
                        <div className="post_tabText">
                            Comment
                        </div>
                    </div>
                    <div className="post_tab">
                        <div className="post_tabHead">
                            <img className="post_tabIcon" src={share} />
                        </div>
                        <div className="post_tabText">
                            Share
                        </div>
                    </div>
                </div>
                {/* comment */}
                <div>

                </div>
            </Paper>
        </div>
     );
}
 
export default Post;