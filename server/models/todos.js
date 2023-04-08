import mongoose from 'mongoose'; //remember a schema is used for validation of the input
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content: String
},{
    timestamps: true
});
const Todo = mongoose.model('Todo', todoSchema);
export default Todo;