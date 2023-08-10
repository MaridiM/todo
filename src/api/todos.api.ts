import axios from "axios"
import { Todo } from "types"

const todosMockData: Todo[] = [
    // {
    //     id: 1,
    //     text: 'dsa Dorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
    //     closed: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: 2,
    //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
    //     closed: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: 3,
    //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
    //     closed: false,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: 4,
    //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
    //     closed: false,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
    // {
    //     id: 5,
    //     text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, nesciunt nulla modi repellendus autem corporis facilis amet vel beatae cupiditate.',
    //     closed: false,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    // },
]

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
        const todo = await axios.get(`http://localhost:5000/todos/${id}`)
        const response = await axios.put(`http://localhost:5000/todos/${id}`, {
            id,
            text: changedText,
            closed: todo.data.closed,
            createdAt: todo.data.createdAt,
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
            id,
            text: todo.data.text,
            closed: !todo.data.closed,
            createdAt: todo.data.createdAt,
            updatedAt: new Date(),
        });

        console.log(response.data);
        return response.data
    },

    getTodos: async (categoryId: string, searchValue: string) : Promise<Todo[]> => {
      const respons = await axios.get(`http://localhost:5000/todos?${categoryId}${searchValue ? `&q=${searchValue}` : ''}`)
      return respons.data  
    }
}