import express from 'express';
import { createTodo, deleteTodo, readTodos, updateTodo } from '../controller/todos.js';
//to create routes to make the requests of reading or writing a todo
const router = express.Router();
router.get('/',readTodos);  // read the todo
router.post('/',createTodo); //post a new todo
router.patch('/:id',updateTodo);
router.delete('/:id',deleteTodo);
export default router; //to be able to use it in other files