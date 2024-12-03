const {Schema, model} = require('mongoose')


const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required:true,
    },

    status:{
        type: String,
        enum: ['Pendiente','En_Proceso', 'Completada']
    },

},{timestamps: true})


module.exports = model("Task", taskSchema);