import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import group from "../../../images/group.png";
import memories from "../../../images/memories.png";
import saved from "../../../images/saved.png";
import groups from "../../../images/groups.png";
import video from "../../../images/video.png";

class LeftSide extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data:[]
    }

    getData = () => {
        let jsondata = [
            {
                "image": "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=qpkbNpQcWu8Q7kNvgG0DyuM&_nc_ht=scontent-hkg4-2.xx&oh=00_AYAEANLIfGWw0p9YUeQ5-zXko4dYEfpMs_iMoPEw8HTHww&oe=66EBAE7A",
                "text": "Lư Quân"
            },
            {
                "image": group,
                "text": "Friends"
            },
            {
                "image": memories,
                "text": "Memories"
            },
            {
                "image": saved,
                "text": "Saved"
            },
            {
                "image": groups,
                "text": "Groups"
            },
            {
                "image": video,
                "text": "Videos"
            }
        ];
        this.setState({data: jsondata});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return (
            <div>
                {
                    this.state.data.map((item) => (
                        <ImageLayout image={item.image} text={item.text} />
                    ))
                }
            </div>
          );
    }
}
 
export default LeftSide;