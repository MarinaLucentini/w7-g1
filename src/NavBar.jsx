
function Nav (props){
    return (
        <>    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href={props.link}>Prova</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={props.link}>{props.linkCurrent}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link}>{props.linkSecond}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={props.link}>{props.linkThird}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        </>
    )
}
export default Nav