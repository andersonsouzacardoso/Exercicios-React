import lista from "../../dados/lista"
export default function Lista(props){

    const lista1 = lista.map((lista) =>{
        return(
            <li key={lista.id}>
                {lista.id}) {lista.nome} -- {lista.nota}
            </li>
        )
    })


    return(
        <div>
            <ol style={{listStyle: "none"}}>
                {lista1}
            </ol>
        </div>
    )
}