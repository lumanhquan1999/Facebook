import React, { useState, useEffect } from 'react';
import ImageLayout from "../ImageLayout";
import "./RightSide.css";

const RightSide = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        fetch("http://localhost:8080/api/userService/getAllUser")
            .then(response => response.json())
            .then(json => {
                if (json) {
                    setData(json);
                }
            })
    }

    return (
        <div className="rightside_container">
            <div className="rightside_header">
                Contacts
            </div>
            <div className="rightside_content">
                {
                    data && data.map((item) => (
                        <ImageLayout image={item.userImage} text={item.userName} status={item.active} />
                    ))
                }
            </div>
        </div>
      );
}
 
export default RightSide;