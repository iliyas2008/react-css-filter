import { useState } from 'react';
import styles from '../main-div/Display.module.css';
export default function Grayscale(props){
    const [grayValue, setGrayValue] = useState("");

    const handleGrayscale = (e)=>{
        console.log(e.target.value)
        setGrayValue(e.target.value)
        props.getGrayValue(grayValue, false)
    }
    return(
        <>
        <div className={styles.grayscaleContainer}>
          <label htmlFor="grayscale"  className={styles.srcTxt} >Grayscale</label>
          <input type="range" name='grayscale' className={styles.slider} min="1" max="100" defaultValue="0" step="1" onChange={handleGrayscale}/>
        </div>
        </>
    )
}