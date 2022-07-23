import {Navbar} from '../navbar/navbar'

export function Login() {
  return (
    <main >

      <Navbar/>
      <div className="background-default pt-5">
        <form className="col-lg-6 col-md-8 mx-auto bg-light p-4 rounded div-position" action='#' method='POST'>
          <h1 className="text-center">Login</h1>
          <input type="text" placeholder="Nome Completo" className="form-control form-control-lg"/><br />
          <input type="password" placeholder="Senha" className="form-control form-control-lg"/> <br />
          <a href="#" className="d-flex justify-content-center text-decoration-none"><button className="btn btn-outline-success">Entrar</button></a>
        </form>
      </div>     
    </main> 
  )
}