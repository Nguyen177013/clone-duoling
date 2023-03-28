import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { formatDistanceToNow} from 'date-fns'
import { AuthContext } from "../../context/authReducer/authContext";



const BlogDetail = () => {
    const { id: blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const { state } = useContext(AuthContext);
    const { token } = state.user;

    useEffect(() => {
        fetch(`http://localhost:3000/api/blog/get-blog/${blogId}`,
        {
            headers: { "Authorization": `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setBlog(data))
            .catch(err => console.error(err));
    },[])
    console.log(blog);
    return (

        <div className="blogs__content">
            {blog && (
                <div className="blog__container">
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
                            <div dangerouslySetInnerHTML={{__html: blog.body}}/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BlogDetail;