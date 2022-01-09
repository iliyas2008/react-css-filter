import { useEffect, useState } from "react";
import axios from 'axios';
import Thumbnails from "../img-tiles/Thumbnails";
import SearchImg from "../search-div/SearchImg";

export default function Gallery(){

    const [photos, setPhotos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("italy")

    const apiUrl = "https://pixabay.com/api/"
    const apiKey = "25165675-7a7e57dd0ccbe237053c01faa"

    useEffect(()=>{
        axios.get(apiUrl+"?key="+apiKey+"&q="+searchTerm)
        .then((res)=>{
            setPhotos(res.data.hits)
        })
    },[searchTerm])
    
    const handleSearchTerm = (resTerm)=>{
        setSearchTerm(resTerm);
    }
    return(
    <>
        <h1>Gallery</h1>
        <p>Search random images online... </p>
        <SearchImg searchData={{setSearchTerm:handleSearchTerm}} />
        <Thumbnails photosData={photos} />
    </>
)}