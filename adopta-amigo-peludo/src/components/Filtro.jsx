import {useState} from 'react';

//filtrar mascota por tipo de mascota, estado, edad sexo, etc
export default function Filtro ({setFiltro}){

    const [tipo, setTipo] = useState('');
    const [estado, setEstado] = useState('');
    const [sexo, setSexo] = useState('');

    const filtrar = () => {
        setFiltro({
            tipo: tipo,
            estado: estado,
            sexo: sexo,
        })
    }

    return(
        <div>
            <select onChange={(e) => setTipo(e.target.value)}>
                <option value="">Tipo</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Conejo">Conejo</option>
            </select>
            <select onChange={(e) => setEstado(e.target.value)}>
                <option value="">Estado</option>
                <option value="adopcion">En adopción</option>
                <option value="adoptado">Adoptado</option>
            </select>
            <select onChange={(e)=> setSexo(e.target.value)}>
                <option value="">Sexo</option>
                <option value="macho">Macho</option>
                <option value="hembra">Hembra</option>
            </select>

            <button onClick={filtrar}>FILTRA</button>
        </div>
    )

}
