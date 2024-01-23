import PostBlock from "../../../components/PostBlock/PostBlock"

export default function Posts({dataPost}){
    return dataPost.isLoading ? <div>Загрузка</div> : <div className="flex flex-row w-screen justify-around">
        <PostBlock data={dataPost.data}/>
    </div>
}