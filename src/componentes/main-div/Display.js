import React, { useState } from 'react';
import Brightness from '../control-div/Brightness';
import Grayscale from '../control-div/Grayscale';
import ImageView from '../img-div/ImageView';
import styles from './Display.module.css';
export default function Display(){
    const [grayValue, setGrayValue] = useState("")
    const [brightValue, setBrightValue] = useState("")
    const [bright, setBright] = useState(false);
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
                    {grayValue:grayValue, 
                    brightValue:brightValue, bright:bright}}/>
                <div className={styles.controlDiv}>
                    <Grayscale getGrayValue={getGrayValue} />
                    <Brightness getBrightValue={getBrightValue} />
                </div>
            </div>
        </React.Fragment>
    )
}