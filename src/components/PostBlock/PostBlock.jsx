import { useState } from "react"
import PostCard from "../PostCard/PostCard"
import styles from "./PostBlock.module.scss"
import { ArrowRight, ArrowBack } from "@mui/icons-material"

export default function PostBlock({data}){

    const [firstPost, setFirstPost] = useState(1)
    const [secondPost, setSecondPost] = useState(2)
    const countPost = data.items.length

    function postAdd(){
        
        if (secondPost === countPost-1){
            return
        }
        setFirstPost(firstPost+1)
        setSecondPost(secondPost+1)
    }

    function postDel(){
        if (firstPost === 1){
            return
        }
        setFirstPost(firstPost-1)
        setSecondPost(secondPost-1)
    }

    return <div className={styles.container}>
        { firstPost !== 1 ?  <div className={styles.button} onClick={postDel}>
            {"<"}
        </div> : <div></div> }
        <div className="grid grid-flow-col gap-10">
            <PostCard text={data.items[firstPost].text} image={data.items[firstPost].attachments[0].photo.sizes.find( e => e.type === "Y" ).url}/>
            <PostCard text={data.items[secondPost].text} image={data.items[secondPost].attachments[0].photo.sizes.find( e => e.type === "Y" ).url}/>
        </div>
        {secondPost !== countPost-1? <div className={styles.button} onClick={postAdd}>
            {">"}
        </div>: <div></div> }
    </div>
    
}