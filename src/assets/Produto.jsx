import { useState } from "react"
export default function Produto(){

    const [resultado, setResultado] = useState ("")

    return(
        <div className="container">
            <label htmlFor="">
                <select value ={resultado}onChange={(e) => setResultado(e.target.value)} >
                    <option value="">Peças</option>
                    <option value="Processador">Peça 1</option>
                    <option value="Placa de Video">Peça 2</option>
                    <option value="Placa Mãe">Peça 3</option>
                </select>
            </label><br />
            <br /><p>{resultado}</p>
        </div>
    )
}