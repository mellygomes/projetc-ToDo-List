import './App.css'
import {Cabecalho, Conteudo, Rodape} from './components'
import { Inicial } from './pages'

function App() {

  return (
    <>
      <Cabecalho nomeUsuario="Melly"/>
      <Conteudo>
          <Inicial></Inicial>
      </Conteudo>
      <Rodape criador="Melly Gomes"> </Rodape>
    </>
  )
}

export {App}
