import Produto from "./assets/Produto"
import Aleatorio from "./assets/componentes/outros/Aleatorio"
import Card from "./assets/componentes/layout/Card"
import Lista from "./assets/componentes/outros/Lista"
import TabelaProdutos from "./assets/componentes/outros/TabelaProdutos"
import MegaSena from "./assets/dados/Mega/MegaSena"

export default function App(){
  return(
    <div className="conteudo">
    
        
        <Card titulo="Loja de hardware">
            <Produto/>
        </Card>

        <Card titulo="MegaSena da Virada" color="#3CB371">
            <MegaSena/>
        </Card>

        <Card titulo="valor Aleatório" color="#2E2E2E">
        
              <Aleatorio/>
        </Card>

        <Card titulo="Lista de Alunos" color="#FF1493">
                <Lista/>
        </Card>

        <Card titulo="Tabela de Produtos" color="#20B2AA">
                <TabelaProdutos/>
        </Card>
    </div>
  )
}