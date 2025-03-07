import fotoPerfil from '../../../assets/foto-perfil.jpg'

function Sobre(){
    return(
        <section id="sobre" className='secao-sobre d-flex flex-column justify-content-center align-items-center' style={{marginTop: "5rem"}}>
            <h1>Jansey Dev</h1>
            <div className='d-flex align-items-center gap-3' style={{marginTop : "2rem", textAlign:"justify"}}>
                <img src={fotoPerfil} alt="Foto de Perfil" className='image-fluid rounded border border-#E63946 shadow-lg' style={{ width: "300px", height: "300px", objectFit: "cover" }} />
                <p style={{height:"300px", width : "300px", maxWidth :"50%"}}>Sou estudante de Análise e Desenvolvimento de Sistemas e técnico em Química pelo Instituto Federal da Bahia (IFBA). Tenho experiência em desenvolvimento full-stack, análise de dados e inteligência de negócios. Estou sempre buscando melhorar minhas habilidades, aprender novas tecnologias, trabalhar em equipe e superar desafios.</p>
            </div>
        </section>
    );
}

export default Sobre;