import React, { Component } from 'react';
import { Avatar, Paper } from "@mui/material";
import "./PostContainer.css";
import like from "../../../images/like.png"
import likebutton from "../../../images/likebutton.png"
import comment from "../../../images/comment.png"
import share from "../../../images/share.png"

class Post extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }

    isImageAvailable=(data) => {
        return data == "" ? false : true;
    }

    render() { 
        return (
            <div>
            <Paper className="post_container">
                {/* header */}
                <div className="post_header">
                    <div className="post_header_avatar">
                        <Avatar className="post_avatar" src={this.props.object.userImage} />
                    </div>
                    <div className="post_header_name">
                        {this.props.object.userName}
                    </div>
                </div>
                {/* description */}
                <div className="post_description">
                    {this.props.object.description}
                </div>
                {/* image */}
                <div className="post_image">
                    {
                        this.isImageAvailable() ? <img width="600px" src={this.props.object.postImgURL} /> : <span></span>
                    }
                </div>
                {/* like count */}
                <div className="post_likecountContainer">
                    <div className="post_like">
                        <img className="post_img" src={like} />
                    </div>
                    <div className="post_likecount">
                        {this.props.object.like}
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
                <div className="post_comment">
                    <div>
                        <Avatar className="post_commentAvatar" src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A" />
                    </div>
                    <div>
                        <input className="post_commentBox" placeholder="What's on your mind ?" type="text" />
                    </div>
                </div>
            </Paper>
        </div>
        );
    }
}

export default Post;