import React, { Component } from 'react';
import ImageLayout from "../ImageLayout";
import "./RightSide.css";

class RightSide extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        data:[]
      }

    getData = () => {
        let json = [
            {
                "image": "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-1/455132620_2118169721890599_704626138008238149_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=EaORSOGmW2cQ7kNvgEB92i0&_nc_ht=scontent-hkg4-1.xx&oh=00_AYAlaXv81VOU1YOT_xkvO66Fj-IMUr1QUY3Tx-oy8Khdsw&oe=66CE419A",
                "text": "Nguyễn Khắc Hoàng Phi"
            },
            {
                "image": "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/296901222_3374023979551058_3247643129638086849_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=X89e43dUiQ4Q7kNvgFuY4o2&_nc_ht=scontent-hkg1-2.xx&oh=00_AYBmDHdjM6sLsmY-SG79PuA8z3eJxKh6aYtyt7lXOgMMBw&oe=66CE4C4D",
                "text": "Đăng Nguyễn"
            }
        ]
        this.setState({data: json});
    }

    componentDidMount() {
        this.getData();
    }

    render() { 
        return (
            <div className="rightside_container">
                <div className="rightside_header">
                    Contacts
                </div>
                <div className="rightside_content">
                    {
                        this.state.data.map((item) => (
                            <ImageLayout image={item.image} text={item.text} />
                        ))
                    }
                </div>
            </div>
          );
    }
}
 
export default RightSide;