const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="fixed-bottom bg-light" >
            <p className="text-center m-3">Copyright: {currentYear} &copy; All rights reserved.</p>
        </footer>
    );
}

export default Footer;