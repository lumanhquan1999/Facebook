import React, { Component } from 'react';
import Post from "./Post";

class PostContainer extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data: []
    }

    getData = () => {
        let json=[
            {
                "postID": 1,
                "userID": 1,
                "userName": "Lư Quân",
                "userImage": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A",
                "description": "This is Cường",
                "postImage": "https://i.pinimg.com/736x/cc/6a/c7/cc6ac70a44e912067cafe760623266b1.jpg",
                "like": 100000000
            },
            {
                "postID": 2,
                "userID": 2,
                "userName": "T",
                "userImage": "",
                "description": "This is Cường",
                "postImage": "",
                "like": 1
            }
        ]
        this.setState({data: json});
    }

    componentDidMount() {
        this.getData();
    }
    render() { 
        return (
            <div>
                {
                    this.state.data.map((item) => (
                        <Post object={item} />
                    ))
                }
            </div>
        );
    }
}
 
export default PostContainer;