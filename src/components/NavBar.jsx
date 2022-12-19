import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div className="container-fluid bg-light">
                <header className="d-flex justify-content-center py-3">
                    <ul className="nav nav-pills">
                        <Link to="/" className='m-2 fs-5'>Home</Link>
                        <Link to="/posts" className='m-2 fs-5'>Posts</Link>
                        <Link to="/contact" className='m-2 fs-5'>Contact</Link>
                    </ul>
                </header>
            </div>

            <Outlet />
        </>
    );
}

export default NavBar;