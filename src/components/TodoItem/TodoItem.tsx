import { EditSVG, TrashSVG } from 'assets/icons'
import { Button } from 'components'
import { Checkbox } from 'components/Checkbox'
import { FC, useEffect, useState } from 'react'


interface Props {
    checkedTodo: (id: number) => void
    editTodo: (id: number, text: string) => void 
    deleteTodo: (id: number) => void
    data: any
}

const TodoItem: FC<Props> = ({ checkedTodo, editTodo, deleteTodo, data: {id, text, closed, updatedAt } }) => {


    const [edit, setEdit] = useState<boolean>(false)
    const [clicked, setClicked] = useState(false)
    const [changedText, setChangedText] = useState('')

    useEffect(() => {
        setChangedText(text)
    }, [text])

    /**
     * On Click item
    */
    const onClickItem = () => closed ? setClicked(false) : setClicked(!clicked)
    /**
     * On Edit item
    */
    const onEditItem = () => {

        !closed ? setEdit(!edit) : setEdit(false)
        edit && editTodo(id, changedText)
    }
    return (
        <div className="todo-item" data-closed={closed} data-clicked={clicked} data-edit={edit} onClick={onClickItem}>
            <header className="item-header">
                <span className="item-id">#{id}</span>
                <span className="item-date">{updatedAt.toLocaleString('en', { hour12: false })}</span>
            </header>
            <div className="item-body" >
                <Checkbox checked={closed} onClick={() => checkedTodo(id)} />

                <div className="item-text">
                    {
                        edit 
                            ? <textarea
                                className="item-text-textarea"
                                name="edit_task"
                                id="edit_task"
                                value={changedText}
                                onChange={(e) => setChangedText(e.target.value)}>
                            </textarea> 
                        : changedText
                    }
                </div>

                <div className="item-actions">
                    {
                        !closed && 
                            <Button 
                                onClick={onEditItem}
                                className={'btn accent'}
                                icon={<EditSVG className="btn-icon" />}
                            />
                    }
                    {
                        !edit && <Button
                            onClick={() => deleteTodo(id)}
                            className={'btn warning'}
                            icon={<TrashSVG className="btn-icon" />}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
export default TodoItem