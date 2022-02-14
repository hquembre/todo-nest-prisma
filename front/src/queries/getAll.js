import { gql } from "@apollo/client";

const GET_ALL = gql`
    query {
        getAll {
            id
            todo
            description
            done
        }
    }
`;

export default GET_ALL;
