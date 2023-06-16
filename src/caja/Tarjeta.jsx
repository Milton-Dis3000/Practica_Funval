function Tarjeta(prop) {
    return (
        <div className="tarjeta">
            <div className='box-img'>
                <img className="img-gato" src={prop.img} alt="gato" />
            </div>
            <div className='descrip'>
                <h1>{prop.nombre}</h1>
                <h2>{prop.cargo}</h2>
            </div>
            <div className='contact'>
                <div className='wsp-box' style={prop.color}>

                    <img className='wsp' src={prop.app} alt="" />
                </div>
                <p>{prop.numero}</p>
            </div>
        </div>
    )
}
export default Tarjeta