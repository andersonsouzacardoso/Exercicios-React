import "./Card.css";

export default function Card(props){
    //Função para mudar a cor do card.
        const estilo ={
            backgroundColor: props.color
        }
    return(
        <div className="card" style={estilo}>
            <div className="titulo">
               {props.titulo}
            </div>
            <div className="conteudo">
                    {props.children}
            </div>
        </div>
    )
}