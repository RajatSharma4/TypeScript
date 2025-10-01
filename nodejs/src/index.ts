import express,{type Request,type Response, type NextFunction} from "express"
import todoRoutes from "./routes/todo.js"
import bodyParser from "body-parser";  //it is use when we are put data from cliet to the server and that data need to convert into json

const app = express()
const PORT = 8080;

app.use(bodyParser.json())
app.use("/todos", todoRoutes)

//create own middleware for handling errors
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    res.status(500).json({message:err.message})
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
    
})