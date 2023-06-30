import { Button, Input } from "components"
import { FC, useState } from "react"

interface Props {}

const AddTodo: FC<Props> = () => {
    const [isCreate, setIsCreate] = useState<boolean>(false) 
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
                            buttonText='Add task'
                            placeholder='Input your new task'
                            button
                            onClick={() => setIsCreate(false)}
                    />
            }
        </header>
    )
}

export default AddTodo