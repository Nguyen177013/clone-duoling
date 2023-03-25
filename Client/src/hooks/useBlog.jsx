import { useState, useContext } from "react";
import {AuthContext} from "../context/authReducer/authContext"




export default function useBlog(){
    const { state } = useContext(AuthContext);
    const {token} = state.user;
    const [errors, setErrors] = useState(null);
    const [isLoading, setLoading] = useState(null);
    const postBlog = async (url, title, snippet, body ="") => {
        setLoading(true);
        setErrors(null);
        const respone = await fetch(url,{
            crossDomain:true,
            method:"POST",
            headers:{
                "content-type": "application/json",
                "Authorization": `Bearer ${token}` 
            },
            body: JSON.stringify({title, snippet, body})
        })
        const json = await respone.json();
        if (!respone.ok) {
            console.log(json);
            setLoading(false);
            setErrors(json.error);
        }
        if(respone.ok){
            setLoading(true);
            //  save user to local storage
            // update auth context
            setLoading(false);
        }
    }
    return{errors, postBlog, isLoading};
}