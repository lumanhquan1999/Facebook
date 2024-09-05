import "./StatusBar.css";
import Paper from "@mui/material/Paper";
import uploadIcon from "../../../images/upload.png";
import React, { useState } from "react";
import { storage, uploadBytes, ref, getDownloadURL  } from "../../../firebase";

const Status = (props) => {

    const [uploadImage, setUploadImage] = useState(null);

    const openDialog = async (event) => {
        let image = event.target.files[0];
        if (!image)
            return;
        setUploadImage(URL.createObjectURL(image));
        const storageRef = ref(storage, `status/${image.name}`)
        await uploadBytes(storageRef, image);
        const url = await getDownloadURL(storageRef);

        let sendContent = {
            "userId": JSON.parse(localStorage.getItem("user")).userId,
            "statusImageURL": url
        }

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sendContent)
        };

        fetch("http://localhost:8080/api/statusService/save", request)
            .then(data => {
                props.getData();
            })
            .catch()
    }
    return (
        <div>
            {
                props.uploader == "true" ?
                <Paper className="statusbar_status">
                    <label for="file-upload" className="upload_tabs">
                        <img src={uploadIcon} className="upload_icon" />
                    </label>
                    <input type="file" id="file-upload" onChange={openDialog} />
                </Paper>:

                <Paper className="statusbar_status">
                    <img src={props.object.statusImageURL} className="status_image" />
                </Paper>
            }
        </div>
      );
}
 
export default Status;