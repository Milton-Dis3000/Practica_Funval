function Header(prop) {
    return (
        <div className="header">
            <div className="star">
                <img  src="src\iconos\star-half.svg" alt="media-star" />
            </div>
            <h1>{prop.header}</h1>
        </div>
    )
}
export default Header