function ListItem (props){



    function handleClick (){

        props.ArrDelete(props.id);

    }

        return <div class="area">

       <div class="listText">{props.todo}</div> 

        <div class="deleteButton">
        <button onClick={handleClick}> SİL </button>
        </div>
    </div>


}

export default ListItem;