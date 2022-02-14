import { gql } from "@apollo/client";

const CREATE = gql`
    mutation create($todo: String!, $description: String) {
        create(createToDoInput: { todo: $todo, description: $description })
    }
`;

export default CREATE;
