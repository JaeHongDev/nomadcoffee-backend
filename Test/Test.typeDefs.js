import {gql} from "apollo-server-core";

export default gql`
    type Test{
        id:Int!
    }
    
    type Query {
    test: Test
  }
  type Mutation {
    testA:Test
  }
`