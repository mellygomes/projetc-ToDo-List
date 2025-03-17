import { useState } from 'react'
import { useAppContext } from '../../../hooks'
import { Botao, TIPO_BOTAO, CampoTexto } from '../../../components'
import style from './ListaTarefasItem.module.css'

const ListaTarefasItem = (props) => {
    const {id, nome} = props 

    const [EstaEditando, setEstaEditando] = useState(false)
    
    const { editarTarefa, removerTarefa } = useAppContext()

    return (
        <li className={style.ListaTarefasItem}>
            {EstaEditando && (
                <CampoTexto 
                    defaultValue={nome}
                    onChange={event => editarTarefa(id, event.currentTarget.value)}
                    onBlur={() => setEstaEditando(false)} 
                    autoFocus 
                />
            )}

            {!EstaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}> {nome} </span>
            )}

            <Botao  
                texto="-"
                tipo={TIPO_BOTAO.SECUNDARIO}
                onClick={() => removerTarefa(id)} 
            />
        </li>
    )
}

export { ListaTarefasItem }