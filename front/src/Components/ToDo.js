const ToDo = (props) => {
    return (
        <div class="todo">
            <input type="checkbox" checked={props.done} />
            <input type="text" value={props.todo} />
            <input type="text" value={props.description} />
            <button onClick={props.delete}>Supprimer</button>
        </div>
    );
};

export default ToDo;
