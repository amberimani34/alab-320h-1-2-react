function Article (props) {
    return (
        <>
        <div className='article'>
            <time dateTime="2020-11-12" className="datetime">{props.date}</time>
            <h2 className='title'>{props.title}</h2>
            <img src={props.img} alt={props.alt} className='img' />
            <p className='par'>{props.article}</p>
            <a href="#" className='continue'>Continues ...</a>

        </div>
        </>
    )
}

export default Article;