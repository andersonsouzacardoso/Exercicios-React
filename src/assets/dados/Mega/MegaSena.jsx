import { useState } from "react"
import './Mega.css'
export default function MegaSena(props){

    //Essa função retem o numero que está dentro do array! caso não escolha o numero retido ele entra na constante aleatório.
    function GerarNumeroNaoContido(min, max, Array){
        const aleatorio = parseInt(Math.random() * (max - min) + min)
        return Array.includes(aleatorio) ? GerarNumeroNaoContido (min, max, Array) : aleatorio
    }
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums) =>{
            const novoNumero = GerarNumeroNaoContido(1, 60, nums)
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 + n2) 
        return numeros
    }

    const qtde = props. qtde || 6
    const numerosIniciais =  Array(qtde).fill(0)  
    const [numeros, setNumeros] = useState(numerosIniciais)

    
    //console.log(GerarNumeroNaoContido(1 , 10, [1, 4, 8, 5, 6, 7, 10]))
    
    return(
        <div>
            <h2>MegaSena da Virada</h2>
            <h3>{numeros.join(' ')}</h3>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Sortear</button>
        </div>
    )
}