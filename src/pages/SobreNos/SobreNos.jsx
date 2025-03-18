import style from './SobreNos.module.css'

const SobreNos = () => {
    return (
        <>
            <div className={style.Content}>
                <div className={style.AboutText}>

                    <p className={style.Saudacao}>Olá, visitantes!</p>

                    <p>Me chamo Melly e sou uma estudante de Ciência da Computação apaixonada
                    por criar soluções para problemas e descobrir coisas novas! </p> 
                    
                    <p>Este site é um projeto desenvolvido de acordo com a trilha de Introdução
                    ao <a href='https://pt.wikipedia.org/wiki/React_(JavaScript)' className={style.linkReact}>React.js</a> oferecida
                    pela instituição executora Venturus através do
                    programa <a href='https://ticemtrilhas.org.br/' className={style.link}>Tic em Trilhas</a>. </p>

                    <p>Estou em busca de expandir minhas habilidades e desenvolver uma base de
                    conhecimentos sólida para fazer muito mais no futuro. Sinta se a vontade para
                    dar uma olhada no meu <a href='https://github.com/mellygomes' className={style.link}>GitHub</a> e 
                    fazer parte desse processo.</p>

                    <p>Se você está aqui, considere-se um observador do início da minha jornada
                    e dos meus sonhos. Espero que nos encontremos novamente outras vezes, 
                    em, talvez, projetos maiores e mais grandiosos. </p>

                </div>

                <div className={style.Gif}> </div>
             </div>
        </>
    )
}

export { SobreNos }