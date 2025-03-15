import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../components"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Melly"/>
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador="Melly Gomes"> </Rodape>
        </>
    )
}

export { LayoutPadrao }