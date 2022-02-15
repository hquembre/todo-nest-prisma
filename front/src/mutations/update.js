import { gql } from "@apollo/client";

const UPDATE = gql`
    mutation update(
        $id: Int!
        $todo: String!
        $description: String
        $done: Boolean!
    ) {
        update(
            id: $id
            updateToDoInput: {
                todo: $todo
                description: $description
                done: $done
            }
        )
    }
`;

export default UPDATE;
