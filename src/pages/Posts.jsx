import { Helmet } from 'react-helmet';
import { getPosts } from "../api/api";
import { useState, useEffect } from 'react';
import Post from '../components/Post';
import SearchBar from "../components/SearchBar";

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

    const results = searchResults.map(post => <Post key={post.id} post={post} />);
    const content = results?.length ? results : <article><p>No Matching Results.</p></article>;

    return (
        <>
            <Helmet>
                <title>Posts</title>
            </Helmet>

            <h1>Posts</h1>

            <SearchBar
                posts={posts}
                setSearchResults={setSearchResults}
            />

            <div className="row">
                {content}
            </div>
        </>
    );
}

export default Posts;
