import { useAppContext } from '../../hooks'
import { ListaTarefasItem } from './ListaTarefasItem/'
import { Loading, TIPO_ICON } from '../Loading'

import style from './ListaTarefas.module.css'

const ListaTarefas = () => {
    const { tarefas, loadingCarregar } = useAppContext()

    return (
        <ul className={style.ListaTarefas}>

            {loadingCarregar && (
                 <div>Carregando... <Loading tipo={TIPO_ICON.GRANDE} /></div>
            )}

            {!loadingCarregar && !tarefas.length && (
                <p> Não há tarefas cadastradas... </p>
            )}

            {tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.id}
                    id={item.id}
                    nome={item.nome}  
                />
            ))}
        </ul>
    )
}

export { ListaTarefas }