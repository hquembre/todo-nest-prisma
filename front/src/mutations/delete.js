import { gql } from "@apollo/client";

const DELETE = gql`
    mutation delete($id: Int!) {
        delete(id: { id: $id })
    }
`;

export default DELETE;
