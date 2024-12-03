const {gql} = require('apollo-server-express')

const typeDefs = gql`

    enum Status{
        Pendiente
        En_Proceso
        Completada
    }

    type Task{
        id:ID
        title: String
        description: String
        status: Status
    }


    type Query{
        hello: String
        getAllTasks(title:String):[Task]
        getTask(id:ID): Task
        getTaskByStatus(status:String): [Task]
    }


    type Mutation{
        createTask(
            title:String
            description:String
            status: Status
        ):Task
        deleteTask(id: ID): String
        updateTask(id: ID, title:String, description:String, status:Status): Task
    }
`
module.exports = {typeDefs}