import { TIPO_ICON } from './constants'
import style from './Loading.module.css'

const Loading = (props) => {
    const {tipo = TIPO_ICON.PEQUENO} = props

    return (
        <div className={style.Loading} tipo={tipo}/>
    )
}

export {Loading}