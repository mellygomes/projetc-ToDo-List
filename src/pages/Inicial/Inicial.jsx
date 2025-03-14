import { ListaTarefas } from "../../components"
import { FormCriarTarefa } from "../../components/FormCriarTarefa"
import style from './Inicial.module.css'

const Inicial = () => {
    return (
        <div className={style.Inicial}>
            <FormCriarTarefa/>
            <ListaTarefas/>
        </div>
    )
}

export {Inicial}