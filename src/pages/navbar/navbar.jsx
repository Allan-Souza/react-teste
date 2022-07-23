export function Navbar() {
    return(
        <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
              BF Energy
            </a>
    
          <ul className="nav justify-content-end nav-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaSobre.html">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaInfos.html">Informações</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaCalculoConsumo.html">Calculadora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="telaInfosGrupo.html">Contato</a>
            </li>
           </ul>

        </div>
      </nav>
    )
}