
const ToDo = (props) =>
{
    const deletList = () =>{
        props.dispatch({type:"DELETE",act:props.arr.id})
    }
    return(
        <>
        <span>
        <button onClick={deletList}>DELETE</button>
        <span> {props.arr.name}</span>
        </span>
        </>
    )
}
export default ToDo