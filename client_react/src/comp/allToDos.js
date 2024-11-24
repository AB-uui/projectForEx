const { useReducer ,useRef, useState} = require("react") 
const {default:ToDo}=require("./toDo")
const AllToDos = () =>{
    const arrList = [{id:1,name:"play"},{id:2,name:"walk"},{id:3,name:"learn"}]
    const listReducer = (state,action) =>{
        switch(action.type){
            case "ADD":
                const a = state.map(l=>l)
                a.push(action.act)
                return  a ;
            case "DELETE":
                return state.filter(l=>{return !(l.id===action.act)})
            default:
                throw new Error();
        }
    }
    const [lists,dispatch] = useReducer(listReducer,arrList) ;
    console.log(lists);
    const i = useRef(arrList.length+1)
    const n = useRef("")
    const addList = () =>{dispatch({type:"ADD",act:{id:i.current.value,name:n.current.value}})}
    return(
        <>
        <span>
        <button style={{color:"darkgoldenrod"}} onClick={addList}>ADD</button>
        <input placeholder="id" type="number" ref={i}/>
        <input placeholder="name" type="test" ref={n}/>
        </span>
        <br/>
        <br/>
        
        
        {lists.map(element => {return <ToDo arr = {element} dispatch = {dispatch}/>})}
       
        </>
    )
}
export default AllToDos
