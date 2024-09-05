import Status from "./Status";
import React, { useState, useEffect } from "react";

const StatusBar = () => {

    const [status, setStatus] = useState(null);
    const getData = () => {
        fetch("http://localhost:8080/api/statusService/getAllStatus")
            .then(response => response.json())
            .then(json => {
                if (json) {
                    setStatus(json);
                }
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return ( 
        <div className="statusbar_container">
            <Status uploader="true" getData={getData} />
            {
                status && status.map((item) => (
                    <Status object={item} getData={getData} />
                ))
            }
        </div>
     );
}
 
export default StatusBar;