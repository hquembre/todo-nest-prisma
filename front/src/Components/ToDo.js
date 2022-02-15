import { useState, useEffect } from "react";

import "./ToDo.css";

const ToDo = (props) => {
    const [done, setDone] = useState(props.done);
    const [toDo, setToDo] = useState(props.todo);
    const [description, setDescription] = useState(props.description);
    const [changed, setChanged] = useState(false);

    useEffect(() => {
        setChanged(
            done !== props.done ||
                toDo !== props.todo ||
                description !== props.description
        );
    }, [done, toDo, description, changed]);

    useEffect(() => {
        setChanged(false);
    }, [props.done, props.todo, props.description]);

    let changeElement;
    if (changed) {
        changeElement = (
            <button
                className="saveButton"
                onClick={() => {
                    props.update({
                        variables: {
                            id: props.id,
                            todo: toDo,
                            description: description,
                            done: done,
                        },
                    });
                }}
            >
                Sauvegarder
            </button>
        );
    }

    let classesToDo = ["todo"];
    if (done) {
        classesToDo.push("done");
    }

    return (
        <div className={classesToDo.join(" ")}>
            <input
                type="checkbox"
                checked={done}
                onChange={(event) => {
                    setDone(event.target.checked);
                }}
                id="checkbox"
            />
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
            <button className="deleteButton" onClick={props.delete}>
                Supprimer
            </button>
            {changeElement}
        </div>
    );
};

export default ToDo;
