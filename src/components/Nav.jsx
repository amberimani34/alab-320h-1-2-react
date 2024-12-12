function Nav (props) {
    return (
        <ul className='ul' style={props.style}>
            <li><a href="#">{props.navigation}</a></li>
        </ul>
    )
}

export default Nav;