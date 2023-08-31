import produtos from "../../dados/produtos"
import "../../dados/TabelaProdutos.css"
export default function TabelaProdutos(props){

    const meusprodutos = produtos.map((produtos) =>{
        return(
            <table>
               <tr>

                    <td>{produtos.id} </td>
                    <td>{produtos.produto} </td> 
                    <td>R${produtos.valor}</td>
               </tr> 

               

            </table>
                    )
        
    })

    return(
        <div className="tabela">
            <table border={"2"}>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTO</th>
                        <th>PREÇO</th>
                    </tr>

                </thead>

                <tbody>
                    {meusprodutos} 
                    
                </tbody>

            </table>
            
        </div>
    )
}