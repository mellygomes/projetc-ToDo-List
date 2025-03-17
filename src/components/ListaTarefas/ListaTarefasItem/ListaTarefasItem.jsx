import { useState } from 'react'
import { useAppContext } from '../../../hooks'
import { Botao, TIPO_BOTAO, CampoTexto, Loading, TIPO_ICON } from '../../../components'
import style from './ListaTarefasItem.module.css'

const ListaTarefasItem = (props) => {
    const {id, nome} = props 

    const [EstaEditando, setEstaEditando] = useState(false)
    
    const {loadingEditar, loadingDeletar, editarTarefa, removerTarefa } = useAppContext()

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value

        editarTarefa(id, nomeTarefa)

        setEstaEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id
    const loadingEstaDeletando = loadingDeletar == id
    
    return (
        <li className={style.ListaTarefasItem}>
            {loadingEstaEditando || EstaEditando && (
                <CampoTexto 
                    defaultValue={nome}
                    onBlur={onBlurTarefa} 
                    autoFocus 
                />
            )}

            {!loadingEstaEditando && !EstaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}> {nome} </span>
            )}

            {loadingEstaEditando && (
                <Loading tipo={TIPO_ICON.PEQUENO} />
            )}

            <Botao  
                texto={loadingEstaDeletando ? <Loading tipo={TIPO_ICON.PEQUENO} /> : "-"}
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)} 
            />
        </li>
    )
}

export { ListaTarefasItem }