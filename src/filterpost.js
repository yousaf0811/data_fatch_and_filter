import React, {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
function Filterpost(){
    const [loading,setLoading] = useState(false)
    const [post, setPost] = useState([]);
    const [searchitem, setSearchitem] = useState("");
    useEffect(()=>{
        const loadpost = async ()=>{
            setLoading(true);
            const responce =await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPost(responce.data);
            setLoading(false);
        }
        loadpost();
    },[]);
    return(
            <div>
             <h1>Search Title</h1>
             <input
             type="text"
             placeholder="Search Title"
             onChange={(e)=>setSearchitem(e.target.value)} />
             {
                loading ? (<h3>Loading....</h3>):(
                    (post.filter((value)=>{
                        if(searchitem === ""){
                            return value;
                        } else if (
                            value.title.toLowerCase().includes(searchitem.toLowerCase())){
                            return value;
                        }
                    })
                        .map(item=><h5 key={item.id}>{item.title}</h5>))
                )
             }
            </div>
    );
}
export default Filterpost