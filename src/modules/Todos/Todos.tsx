import { FC } from 'react'
import { TodoItem } from 'components'

interface Props {}

const Todos: FC<Props> = () => {
    const todos = [
        {
            id: 1623123492108,
            text: 'SOME TASK TEXT 1',
            closed: false,
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            id: 1623323492543,
            text: 'SOME TASK TEXT 2',
            closed: true,
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            id: 162312349978,
            text: 'SOME TASK TEXT 3',
            closed: false,
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            id: 1643423492108,
            text: 'SOME TASK TEXT 4',
            closed: false,
            createdAt: new Date,
            updatedAt: new Date,
        },
        {
            id: 162312882108,
            text: 'SOME TASK TEXT 5',
            closed: false,
            createdAt: new Date,
            updatedAt: new Date,
        },
    ]

    return (
        <div className="todo-list">
            <TodoItem checked={false} />
            <TodoItem checked={false} />
            <TodoItem checked={false} />
            <TodoItem checked={false} />
            <TodoItem checked={false} />
            <TodoItem checked={false} />
        </div>
    )
}

export default Todos