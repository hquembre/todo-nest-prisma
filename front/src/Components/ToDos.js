import { useMutation, useQuery } from "@apollo/client";

import GET_ALL from "../queries/getAll";
import CREATE from "../mutations/create";
import DELETE from "../mutations/delete";
import ToDo from "./ToDo";

const ToDos = () => {
    const { loading, error, data } = useQuery(GET_ALL);
    const [createToDo] = useMutation(CREATE, {
        refetchQueries: [GET_ALL, "getAll"],
    });
    const [deleteToDo] = useMutation(DELETE, {
        refetchQueries: [GET_ALL, "getAll"],
    });

    const creer = () => {
        createToDo({
            variables: { todo: "test", description: "test description" },
        });
    };

    const supprimer = (id) => {
        console.log(typeof parseInt(id, 10));
        deleteToDo({
            variables: { id: parseInt(id, 10) },
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    let todos = data.getAll.map(({ id, description, done, todo }) => (
        <ToDo
            key={id}
            description={description}
            done={done}
            todo={todo}
            delete={() => {
                supprimer(id);
            }}
        />
    ));

    return (
        <div class="todos">
            {todos}
            <button onClick={creer}>Créer</button>
        </div>
    );
};

export default ToDos;
