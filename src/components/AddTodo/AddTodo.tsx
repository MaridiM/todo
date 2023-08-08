import { Input } from "components"
import { useState } from "react"
import { useAppDispatch } from "redux/hooks"
import { addTodo } from "redux/slices/todosSlice"


const AddTodo = () => {
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>('')

    // Request to server
    const dispatch = useAppDispatch()
    const handleAddTodo = () => {
        dispatch(addTodo(inputText))
        setIsCreate(false)
    }

    return (
        <header className="todo-header" data-create={isCreate}>
            <Input
                id='create_task'
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
                buttonText={inputText ? 'Add task' : !isCreate ? 'Add task' : 'Cancel'}
                placeholder='Input your new task'
                button
                className=""
                onClick={!isCreate 
                    ? () => setIsCreate(true) : !inputText 
                    ? () => setIsCreate(false) : () => handleAddTodo()
                }
            />
        </header>
    )
}

export default AddTodo