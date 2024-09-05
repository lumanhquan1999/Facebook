import { Paper, Avatar } from "@mui/material";
import "./UploadSection.css";
import live from "../../../images/live.png";
import image from "../../../images/image.png";
import feeling from "../../../images/feeling.png";
import Dialog from '@mui/material/Dialog';
import { useState } from "react";
import { storage, uploadBytes, ref, getDownloadURL  } from "../../../firebase";

const UploadSection = (props) => {

    const [open, setOpen] = useState(false);
    const [uploadImage, setUploadImage] = useState(null);
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");

    const handleClose = () => {
        setOpen(false);
    }

    const openDialog = (event) => {
        setOpen(true);
        setUploadImage(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0]);
    }

    const save = async () => {
        const storageRef = ref(storage, `images/${file.name}`)
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        let sendContent = {
            "userId": JSON.parse(localStorage.getItem("user")).userId,
            "userName": JSON.parse(localStorage.getItem("user")).userName,
            "description": description,
            "postImgURL": url,

        }

        const request = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sendContent)
        };

        fetch("http://localhost:8080/api/postService/save", request)
            .then(data => {
                setOpen(false);
                props.update();
            })
            .catch()
    }

    return ( 
        <div>
            <Dialog aria-labelledby="simple-dialog-title" className="upload_dialogbox" onClose={handleClose} open={open}>
                <div className="upload_header">Create Post</div>
                <input type="text" onChange={(event) => {setDescription(event.currentTarget.value)}} className="upload_textbox" placeholder="What's on your mind" />
                <img src={uploadImage} className="upload_preview" />
                <input type="button" value="Post" onClick={save} className="upload_button" />
            </Dialog>
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
                        <label for="file-upload" className="upload_tabs">
                            <img src={image} width="35px" />
                            <div className="upload_text">Photo/Video</div>
                        </label>
                        <input type="file" id="file-upload" onChange={openDialog} />
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