import "../../assets/css/blogs.css";
import { Link } from "react-router-dom";

const Blogs = () => {
    return (
        <div className="blogs__content">
            <Link to="create">
                <div className="blog__create">
                    <button>Add Blogs</button>
                </div>
            </Link>
            <div className="blogs__feed">
                <article>
                    <a href="">
                        <div className="blog__content">
                            <div className="blog__timepost">
                                <span>March 23, 2023</span>
                            </div>
                            <h2 className="blog__title">
                                How to use movies and TV to practice your language
                            </h2>
                            <div className="blog__author">
                                <span>by Hoang Ngoc Phuc</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="">
                        <div className="blog__content">
                            <div className="blog__timepost">
                                <span>March 23, 2023</span>
                            </div>
                            <h2 className="blog__title">
                                Interning with Duolingo: bringing our characters to a new dimension
                            </h2>
                            <div className="blog__author">
                                <span>by Hoang Ngoc Phuc</span>
                            </div>
                        </div>
                    </a>
                </article>
                <article>
                    <a href="">
                        <div className="blog__content">
                            <div className="blog__timepost">
                                <span>March 23, 2023</span>
                            </div>
                            <h2 className="blog__title">
                                Uncover a mysterious Chilean shipwreck with the Duolingo Spanish Podcast lo
                            </h2>
                            <div className="blog__author">
                                <span>by Hoang Ngoc Phuc</span>
                            </div>
                        </div>
                    </a>
                </article>
            </div>
        </div>
    );
}

export default Blogs;