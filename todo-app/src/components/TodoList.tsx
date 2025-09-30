import React from 'react'
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Delete } from 'lucide-react';

type todoPropElement = {
    items:{id:string, text:string}[];
    onRemoveTodo: (todoId:string)=>void
}

const TodoList: React.FC<todoPropElement> = (props) => {
    console.log(props);
    
  return (
    <div className='grid md:grid-cols-5 gap-3 my-5 p-5 md:p-0.5'>
      {
        props.items.map((todo)=>(
          <Card key={todo.id} className='bg-gray-300'>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>{todo.text}</CardTitle>
                <Button onClick={()=>props.onRemoveTodo(todo.id)} className='h-6 w-6' variant={'destructive'} size={'icon'}><Delete/></Button>
            </CardHeader>
          </Card>
        ))
      }
    </div>
  )
}

export default TodoList
