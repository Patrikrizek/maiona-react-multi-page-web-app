import { Link } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const NoPage = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Page Not Found</title>
                </Helmet>
            </HelmetProvider>

            <h1>Oops!</h1>
            <h5>404 - PAGE NOT FOUND</h5>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <ul className="nav nav-pills">
                <Link to="/" className='m-2 fs-5'>Go To Homepage</Link>
            </ul>
        </>
    );
}

export default NoPage;
