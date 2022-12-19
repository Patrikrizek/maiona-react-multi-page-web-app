import { Helmet } from 'react-helmet';
import { getPosts } from "../api/api";
import { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        getPosts().then(json => {
            setPosts(json);
            return json;
        }).then(json => {
            setSearchResults(json);
        })
    }, []);

    return (
        <>
            <Helmet>
                <title>Posts</title>
            </Helmet>

            <h1>Posts</h1>

            <div className="row">
                {searchResults.map(post =>
                    <div className="col my-2" key={post.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={'https://picsum.photos/200'} className="card-img-top" alt="Randomly generated image" />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                                <span className="card-text">Post No: {post.id}</span><br />
                                <span className="card-text"> Author: {post.userId === 1 ? 'Patrick' : 'Peter'}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Posts;
