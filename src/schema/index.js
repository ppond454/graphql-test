import { gql } from "apollo-server-express"


const users=[
    {
        id: "1",
        name: "pp"
    },
    {
        id: "2",
        name: "pp1"
    },
    {
        id:"3" ,
        name:"pp2"
    }
]

const me = users[0]

export const resolvers ={
    Query:{
        me: (parent, args , context , info )=>me,
        user: (parent, args , context , info )=>{
            const id = args.id
            const user = users.find(u=> u.id === id)
            
            return user
        },
        users:  (parent, args , context , info )=> users
    }
}

export const typeDefs = gql`
  type Query {
    me: User!
    user(id: ID!): User
    users: [User]!
  }

  type User {
    id: ID!
    name: String!
  }
`
