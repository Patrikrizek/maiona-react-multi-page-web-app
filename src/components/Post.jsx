const Post = ({ post }) => {


    return (
        <div className="col my-2">
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
    );
}

export default Post;
