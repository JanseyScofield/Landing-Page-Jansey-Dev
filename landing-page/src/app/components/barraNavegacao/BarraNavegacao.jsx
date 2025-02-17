function BarraNavegacao(){
    return(
        <nav className="col-12 col-md-8 col-lg-6">
            <ul className="d-flex justify-content-between lista-navegacao" style={{listStyle : 'none' }}>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Formação Acadêmica</a></li>
                <li><a href="#">Experiências</a></li>
                <li><a href="#">Projetos</a></li>
                <li><a href="#">Contatos</a></li>
            </ul>
        </nav>
    );
}

export default BarraNavegacao;