import { Input } from "components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoRedux } from "redux/slices/todosSlice"


const AddTodo = () => {
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const [inputText, setInputText] = useState<string>('')

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
                    ? () => setIsCreate(false) : () => {dispatch(addTodoRedux(inputText)); setIsCreate(false); }
                }
            />
        </header>
    )
}

export default AddTodo