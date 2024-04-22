function ImageComponent (props){
    return (
        <>
        
        <img src={props.img} alt={props.alt} className={props.className}/>
        
        </>
    )
}
export default ImageComponent