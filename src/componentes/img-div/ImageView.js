import { useState } from "react";
import styles from "../main-div/Display.module.css";

export default function ImageView(props){

    const defaultUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKheXIrHVZdMBdAbcGpUblJWzIRXwXvU_bPPhWhM3eOB9e0ZmNbLtrEduV1EgfB02EpaY&usqp=CAU"
    const [imgSrc, setImgSrc] = useState("");
    
    const handleImgSrc = (e)=>{
        console.log(e.target.value)
        setImgSrc(e.target.value)
    }

    const {recImgData, grayValue, brightValue, bright} = props.controlData
    // console.log(recImgData.myProps.previewURL);
    const recImg = recImgData.myProps.largeImageURL
    
    const grayness = {
        filter:`grayscale(${grayValue}%)`
    }
    const brightness = {
        filter:`brightness(${brightValue}%)`
    }
    return(
        <>
        <img className={styles.imgView} 
            style={bright? brightness : grayness} 
            src={imgSrc === "" ? recImg === "" ? defaultUrl : recImg : imgSrc} 
            alt="input graphics"/>
        <div>
        <label style={recImg !== "" ? {display:"none"} : {display:"block"}} htmlFor="img-src"  className={styles.srcTxt} >Image Src</label>
        <input style={recImg !== "" ? {display:"none"} : {display:"block"}}  type="text" id="img-src" name="img-src" onChange={handleImgSrc}/>
        </div>
        </>
    )
}