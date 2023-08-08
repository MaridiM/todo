import axios from "axios"
import { Todo } from "types"

export const todosApi = {
    fetchTodos: async (): Promise<Todo[]> => {
        const response = await axios.get('http://localhost:5000/todos');
        return response.data
    },
    addTodo: async (text: string): Promise<Todo> => {
        const response = await axios.post('http://localhost:5000/todos', {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        return response.data;
    },
    editTodo: async (id: number, changedText: string): Promise<Todo> => {
        const response = await axios.put(`http://localhost:5000/todos/${id}`, {
            text: changedText,
            updatedAt: new Date(),
        })

        return response.data
    },
    deleteTodo: async (id: number): Promise<void> => { 
        await axios.delete(`http://localhost:5000/todos/${id}`)
    },
    
    checkedTodo: async (id: number): Promise<Todo> => {
        const todo = await axios.get(`http://localhost:5000/todos/${id}`)
        const response = await axios.put(`http://localhost:5000/todos/${id}`, {
            closed: !todo.data.closed,
            updatedAt: new Date(),
        });

        return response.data
    },
}