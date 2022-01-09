import { useState } from 'react';
import styles from '../main-div/Display.module.css';
export default function SearchImg(props){
    const [searchVal, setSearchVal] = useState("");
    // console.log(props.searchData);
    const handleSearchVal = (e)=>{
        setSearchVal(e.target.value)

    }
   const handleEnterKey = (event) => {
        if(event.key === 'Enter'){
            if(searchVal===""){
                alert("Enter a value to search");
            }else{
                setSearchTerm(searchVal)
                setSearchVal("")
            }
        }
    }

    const { setSearchTerm } = props.searchData
    const handleClick = ()=>{
        if(searchVal===""){
            alert("Enter a value to search");
        }else{
            setSearchTerm(searchVal)
            setSearchVal("")
        }
    }
    return(
        <>
        <div className={styles.searchDiv}>
            <input style={{padding:".8em", fontSize:"1rem", borderRadius:"3px", outline:"none", border:"none"}} type="text" value={searchVal} onChange={handleSearchVal} onKeyPress={handleEnterKey} placeholder="Enter a keyword ..." />
            <button style={{margin:".5rem", padding:".8em", background:"blue", color:"white", border:"none", fontSize:"1rem"}} onClick={handleClick}>Search</button>
        </div>
        </>
    )
}