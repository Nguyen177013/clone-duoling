import "../../assets/css/blogs.css"
import TextEditor from "../../../ckeditor5/TextEditor";
const Blogs = () => {
    return (
        <div className="blogs__content">
            <div className="blog__create">
                <button>Add Blogs</button>
            </div>
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
            <TextEditor/>
        </div>
    );
}

export default Blogs;