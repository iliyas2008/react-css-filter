import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Brightness from '../control-div/Brightness';
import Grayscale from '../control-div/Grayscale';
import ImageView from '../img-div/ImageView';
import styles from './Display.module.css';
export default function Display(){
    
    const [grayValue, setGrayValue] = useState("")
    const [brightValue, setBrightValue] = useState("")
    const [bright, setBright] = useState(false);
    const data = useLocation();
    const recImgData = data.state 
    
    const navigate = useNavigate();
    const getGrayValue = (graydata, brightBool)=>{
        setGrayValue(graydata)
        setBright(brightBool)
    }
    const getBrightValue = (brighdata, brightBool) =>{
        setBrightValue(brighdata)
        setBright(brightBool)
    }
    return(
        <React.Fragment>
            <div className={styles.main}>
                <ImageView controlData={
                    {recImgData:recImgData, grayValue:grayValue, 
                    brightValue:brightValue, bright:bright}}/>
                <div className={styles.controlDiv}>
                    <Grayscale getGrayValue={getGrayValue} />
                    <Brightness getBrightValue={getBrightValue} />
                </div>
                <button style={{marginTop:"5rem", padding:".8em", background:"blue", color:"white", borderRadius:"3px", border:"none"}} onClick={() => navigate('/')}>Go Back</button>
            </div>
        </React.Fragment>
    )
}