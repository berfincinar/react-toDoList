import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { uniqueId } from "lodash";

function ListController() {

    const [todoList, setTodoList] = useState([]);
    const [newTodo , setNewTodo] =  useState("");


    useEffect(()=>{
        console.log(todoList);
    }, [todoList]);

    function buttonClick (){
        const tempArr = [...todoList];
        tempArr.push({todo: newTodo , id: uniqueId()});
        setTodoList(tempArr);
        setNewTodo("");

    }

    function ArrDelete(id){
        const tempArr = [...todoList];
       const index =  tempArr.findIndex(elem => elem.id === id);
        tempArr.splice(index,1);
        setTodoList(tempArr);
    }

    return(

        <div>

            <input class="inputList" value={newTodo} onChange={e => setNewTodo(e.target.value)}></input>
            <button class="buttonList" onClick={buttonClick}> EKLE </button>
            <div class="listItemArea">
            {todoList.map(item => {
                
                return <ListItem key={item.id} id={item.id} todo={item.todo} 
                ArrDelete={ArrDelete}/>;

            })}
            </div>
            
           
        </div>

    );

}


export default ListController;