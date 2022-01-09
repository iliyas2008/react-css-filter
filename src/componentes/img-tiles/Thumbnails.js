import { Link } from 'react-router-dom';
import styles from '../main-div/Display.module.css';

export default function Thumbnails(props){

    const {photosData} = props
    console.log(photosData);

    return(
        <>
        <div style={{margin:".5rem", display:"flex", justifyContent:"center", flexWrap:"wrap"}}>

        {
            photosData.map((item)=>{
                return(
                    <Link key={item.id+"link"}
                          to={"/edit"}
                          state={{ myProps: item}}
                        >
                        <img style={{width:"15rem", height:"15rem"}} key={item.id} src={item.largeImageURL} className={styles.thumbnail} alt="thumbnails" />
                    </Link>
                )
            })
            
        }
        </div>
        
        </>
    )
    
}