import Nav from "./Nav";
function Footer () {
    return (
        <>
        <div className='bottom'>
        <Nav navigation="Home" />
        <Nav navigation="Women's" />
        <Nav navigation="Men's" />
        <Nav navigation="On the Street" />
        <Nav navigation="The Catwalk" />
        <Nav navigation="AdWatch" />
        <Nav navigation="About" />
        <Nav navigation="Tips" />
        </div>
        <p className="copyright"> &copy; 2013 Valet Industries, Inc </p>
        </>
    )
}

export default Footer;