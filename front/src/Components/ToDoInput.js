import { useState } from "react";

import "./ToDoInput.css";

const ToDoInput = (props) => {
    const [toDo, setToDo] = useState("");
    const [description, setDescription] = useState("");

    let changeElement;
    if (toDo || description) {
        changeElement = (
            <button
                className="createButton"
                onClick={() => {
                    props.create({
                        variables: {
                            todo: toDo,
                            description: description,
                        },
                    });
                    setToDo("");
                    setDescription("");
                }}
            >
                Créer
            </button>
        );
    }

    return (
        <div className="todo">
            <input
                type="text"
                value={toDo}
                onChange={(event) => {
                    setToDo(event.target.value);
                }}
            />
            <input
                type="text"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value);
                }}
            />
            {changeElement}
        </div>
    );
};

export default ToDoInput;
