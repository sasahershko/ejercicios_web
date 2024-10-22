import '../styles/tarjeta.css'

export default function Tarjeta({nombre, imagen, edad, genero, estado, onClick}){

    return(
        <div className="tarjetas-container" onClick={onClick}>
            <h1>{nombre}</h1>
            <img src={imagen} alt={`Imagen de ${nombre}`} />
            <p>{edad}</p>
            <p className={`genero ${genero === 'macho' ? 'macho' : 'hembra'}`}>{genero}</p>
            <p className={`adoptado ${estado=== 'adoptado' ? 'no': 'si'}`}><strong>{estado==='adoptado' ? 'Adoptado': 'En Adopción'}</strong></p>
        </div>
    )
}