import ButtonComponent from "./ButtonComponent"
import ImageComponent from "./ImageComponent"




function Card (props){
    return(
        <>
    <div className="card">
  <ImageComponent className = 'img-fluid w-25 mx-auto' img='https://plus.unsplash.com/premium_photo-1680706777319-176e18e03a4b?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='logo-react'/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <ButtonComponent className='btn btn-outline-success' typeBtn='button' text='Sono un bottone'/>
  </div>
</div>
        </>
    )
}

export default Card