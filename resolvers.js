const Task = require('./models/Task')


const resolvers = {
    Query:{
        hello:() => 'hello world',
        getAllTasks: async (_, { title }) => {
            const filter = title ? { title: { $regex: title, $options: 'i' } } : {};
            const tasks = await Task.find(filter);
            return tasks;
        },
        getTask: async (_, {id}) => {
            const task = await Task.findById(id);
            return task
        },
        getTaskByStatus: async (_, {status}) => {
            const task = await Task.find({ status: status });
            return task;
        }
    },

    Mutation:{
        createTask: async(_,{title, description, status})=>{
            const newTask = new Task({title, description, status})
            await newTask.save()
            return newTask
        },
        deleteTask: async(_, { id })=>{
            await Task.findByIdAndDelete(id);
            return "Task Deleted";
        },
        async updateTask(_, { id, title, description, status }) {
            const updatedTask = await Task.findByIdAndUpdate(
              id,
              {
                $set: {
                  title,      
                  description,  
                  status        
                },
              },
              {
                new: true,     
                runValidators: true 
              }
            );
            if (!updatedTask) {
              throw new Error('Task not found');
            }
          
            return updatedTask;
          }
    }   
}

module.exports = {resolvers}