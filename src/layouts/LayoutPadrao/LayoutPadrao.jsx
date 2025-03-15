import { Outlet } from "react-router-dom"

import { Cabecalho, Conteudo, Rodape } from "../../components"
import { useAppContext } from "../../hooks"

const LayoutPadrao = () => {
    const { criador } = useAppContext()

    return (
        <>
            <Cabecalho nomeUsuario="Melly"/>
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape criador={criador}> </Rodape>
        </>
    )
}

export { LayoutPadrao }