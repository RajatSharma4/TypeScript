import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState, type ChangeEvent, type FormEvent } from "react"

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
}

const AppTodo = ({onAddTodo}:AddTodoProps) => {
  const[text, setText] = useState<string>("")
  const onchangeHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    setText(event.target.value)
  }

  const submitHandler = (event: FormEvent) =>{
    event.preventDefault()
    onAddTodo(text);
    setText("")
  }
  return (
    <form onSubmit={submitHandler} className="flex gap-4 mt-5">
       <Input onChange={onchangeHandler} type="text" value={text} placeholder="Write some todo ..." className="w-fit border-black"></Input>
       <Button type="submit">Add todo</Button>
    </form>
  )
}

export default AppTodo
