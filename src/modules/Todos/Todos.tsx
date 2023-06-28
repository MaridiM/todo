import { FC } from 'react'
import { TodoItem } from 'components'

interface Props { }

const Todos: FC<Props> = () => {
    const todos = [
        {
            id: 1623123492108,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam  accusantium.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 1623323492543,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.',
            closed: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 162312349978,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni  blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 1643423492108,
            text: 'Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 162312882108,
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis',
            closed: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ]

    return (
        <div className="todo-list">
            {
                todos.map((item, index) => <TodoItem 
                    key={index}
                    data={item}
                />)
            }


        </div>
    )
}

export default Todos