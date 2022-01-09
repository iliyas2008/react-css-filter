import { useState } from 'react';
import styles from '../main-div/Display.module.css';
export default function Brightness(props){
    const [brightValue, setBrightValue] = useState("");

    const handleBrightness = (e)=>{
        // console.log(e.target.value)
        setBrightValue(e.target.value)
        props.getBrightValue(brightValue, true)
    }
    return(
        <>
        <div className={styles.birghtContainer}>
          <label htmlFor="birghtness"  className={styles.srcTxt} >Brightness</label>
          <input type="range" name='birghtness' className={styles.slider} min="1" max="200" defaultValue="100" step="1" onChange={handleBrightness}/>
        </div>
        </>
    )
}