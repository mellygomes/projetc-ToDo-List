import style from './Rodape.module.css'

const Rodape = (props) => {
    const { criador } = props

    const anoAtual = (new Date()).getFullYear()
    if (document.querySelector('body').offsetHeight > window.innerHeight) {
        document.querySelector('style.rodape').classList.add('')
    }
    
    return (
        <div  className={style.Rodape}> 
            <footer>React Básico - {anoAtual} - @{criador}</footer>
        </div>
    )
}

export {Rodape}