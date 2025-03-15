import style from './ListaTarefas.module.css'
import { ListaTarefasItem } from './ListaTarefasItem/'

const ListaTarefas = () => {
    const tarefas = [
        {id: 1, nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3, nome: 'Item 3'}
    ] 

    return (
        <lu className={style.ListaTarefas}>
            {tarefas.map(item => <ListaTarefasItem key={item.id} nome={item.nome} />)}
        </lu>
    )
}

export { ListaTarefas }