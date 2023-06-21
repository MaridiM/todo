import { Button, Input } from "components"
import { FC, useState } from "react"

interface Props {}

const AddTodo: FC<Props> = () => {
    const [isCreate, setIsCreate] = useState<boolean>(false) 
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