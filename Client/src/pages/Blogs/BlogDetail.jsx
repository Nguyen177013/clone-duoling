import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { formatDistanceToNow } from 'date-fns'
import { AuthContext } from "../../context/authReducer/authContext";



const BlogDetail = () => {
    const navigate = useNavigate();
    const { id: blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const { state } = useContext(AuthContext);
    const { token, _id } = state.user;
    const [modalStatus, setModalStatus] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:3000/api/blog/get-blog/${blogId}`,
            {
                headers: { "Authorization": `Bearer ${token}` }
            })
            .then(res => res.json())
            .then(data => {
                document.title = data.title;
                return setBlog(data)
            })
            .catch(err => console.error(err));
    }, [])
    async function handleRemove(){
        const res = await fetch(`http://localhost:3000/api/blog/remove-blog/${blogId}`,{
            method:"POST",
            headers: { "Authorization": `Bearer ${token}` }
        })
        const json = await res.json();
        console.log(json);
        if(json.error){
            alert("Blog can not delete")
        }
        else{
            navigate("/blogs")
        }
    }
    return (

        <div className="blogs__content">
            {blog && (
                <>
                    <div
                        className="confirm__modal"
                        style = {modalStatus ? {display:"flex"}:{}}
                        >
                        <div className="confirm__container">
                            <h2>This blog can not restore after remove it</h2>
                            <p>Do you want to remove it ?</p>
                            <div className="confirm__button">
                                <button className="confirm__btn" onClick={handleRemove}>Yes</button>
                                <button className="refuse__btn" onClick={() => setModalStatus(false)}>No</button>
                            </div>
                        </div>
                    </div>
                    <div className="blog__container">
                        <div className="blog__options" style={(_id === blog.user.userId)? {display:"block"}:{display:"none"}}>
                            <div className="btn__edit">
                                <button>Edit Blog</button>
                            </div>
                            <div className="btn__remove">
                                <button onClick={() => setModalStatus(true)}>Remove Blog</button>
                            </div>
                        </div>
                        <div className="blog__header">
                            <div className="header__time">
                                <span>{formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}</span>
                            </div>
                            <div className="header__title">
                                <h1>{blog.title}</h1>
                            </div>
                            <div className="header__author">
                                by {blog.user.userName}
                            </div>
                        </div>
                        <div className="blog__body">
                            <div className="body__content">
                                <div dangerouslySetInnerHTML={{ __html: blog.body }} />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default BlogDetail;