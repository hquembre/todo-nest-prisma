import { useMutation, useQuery } from "@apollo/client";

import GET_ALL from "../queries/getAll";
import CREATE from "../mutations/create";
import DELETE from "../mutations/delete";
import UPDATE from "../mutations/update";
import ToDo from "./ToDo";
import ToDoInput from "./ToDoInput";

import "./ToDos.css";

const ToDos = () => {
    const { loading, error, data } = useQuery(GET_ALL);
    const [createToDo] = useMutation(CREATE, {
        refetchQueries: [GET_ALL, "getAll"],
    });
    const [deleteToDo] = useMutation(DELETE, {
        refetchQueries: [GET_ALL, "getAll"],
    });
    const [updateToDo] = useMutation(UPDATE, {
        refetchQueries: [GET_ALL, "getAll"],
    });

    const supprimer = (id) => {
        deleteToDo({
            variables: { id: parseInt(id, 10) },
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    let todoElements = [...data.getAll];
    let todos = todoElements
        .sort((a, b) => {
            return a.id - b.id;
        })
        .map(({ id, description, done, todo }) => (
            <ToDo
                key={id}
                id={id}
                description={description}
                done={done}
                todo={todo}
                delete={() => {
                    supprimer(id);
                }}
                update={updateToDo}
            />
        ));

    return (
        <div className="todos">
            {todos}
            <ToDoInput create={createToDo} />
        </div>
    );
};

export default ToDos;
