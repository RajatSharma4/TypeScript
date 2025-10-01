import { Todo } from "../models/todo.js";
const TODO = [];
export const createTodo = (req, res) => {
    // const text = (req.body as{text:string}).text  -> one method
    const text = req.body.text; // => second method
    const newTodo = new Todo(Math.random().toString(), text);
    TODO.push(newTodo);
    res.status(201).json({ message: "Todo created.", newTodo });
};
export const getTodo = (req, res) => {
    res.status(200).json(TODO);
};
// export const updateTodo:RequestHandler<{todoId:string}> = (req,res)=>{
//    const todoId = req.params.todoId;
//    const text = (req.body as {text:string}).text
//    const todoIndex = TODO.findIndex((todo)=>todo.id===todoId)
//    if(todoIndex < 0){
//     throw new Error('Todo not found')
//    }
//    //update todo
//    TODO[todoIndex] = new Todo(TODO[todoIndex].id, text)
//    res.status(200).json({message:"Todo updated", newTodo: TODO[todoIndex]});
// }
export const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Todo not found');
    }
    TODO.splice(todoIndex, 1);
    res.status(200).json({ message: "todo deleted" });
};
