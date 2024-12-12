import Nav from "./Nav";
function Header () {
    return (
        <>
        <h1>Sartre's List</h1>
        <h2>Better-Dressed People</h2>
        <div className='top'>
        <Nav navigation="Women's" />
        <Nav navigation="Men's" />
        <Nav navigation="On the Street" />
        <Nav navigation="The Catwalk" />
        <Nav navigation="AdWatch" />
        <Nav navigation="About" />
        </div>
        </>
    )
}

export default Header;