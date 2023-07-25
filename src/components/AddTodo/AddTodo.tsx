import { Button, Input } from "components"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodoRedux } from "redux/slices/todosSlice"


const AddTodo = () => {
    const dispatch = useDispatch()
    const [isCreate, setIsCreate] = useState<boolean>(false)
    const [inputText, setInputText] = useState('')

    /*
        TODO: Button text 
            - установить на кнопку дефолтный  текст 'Add Todo'
            - после нажатия  на кнопку открывается инпут. если  он пустой то  текст  кнопки на 'Cancel'
            - если в input есть длина  то название кнопки меняется на 'Add Todo'
        TODO: Button onClick
            - по дефолту кнопка onClick изменяет  состояние isCreate  что  открывает  input
            - на открытом input кнопка onClick должна изменять состояние isCreate
            - если в input есть длина, тогда onClick выполняет addTodo и закрывается изменением isCreate
    */


    return (
        <header className="todo-header" data-create={isCreate}>
            {
                !isCreate
                    ? <Button text='Add task' onClick={() => setIsCreate(true)} />
                    : <Input
                        id='create_task'
                        onChange={(e) => setInputText(e.target.value)}
                        value={inputText}
                        buttonText={inputText ? 'Add task' : 'Cancel'}
                        placeholder='Input your new task'
                        button
                        onClick={!inputText ? () => setIsCreate(false) : () => { dispatch(addTodoRedux(inputText)); setIsCreate(false); }}
                    />
            }
        </header>
    )
}

export default AddTodo