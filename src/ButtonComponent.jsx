function ButtonComponent (props){
    return(
        <>
<button className={props.className} type={props.typeBtn}>{props.text}</button>

        </>
    )
}
export default ButtonComponent