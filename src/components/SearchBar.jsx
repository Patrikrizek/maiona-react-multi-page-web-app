import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        if (!e.target.value) return setSearchResults(posts);

        const resultsArray = posts.filter(post =>
            post.title.includes(e.target.value) ||
            post.body.includes(e.target.value));

        setSearchResults(resultsArray);
    };

    return (
        <header>
            <form onSubmit={handleSubmit} className="d-flex my-3" role="search">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    id="search"
                    onChange={handleChange}
                />
                <button
                    className="btn btn-outline-success"
                    type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    );
}

export default SearchBar;
