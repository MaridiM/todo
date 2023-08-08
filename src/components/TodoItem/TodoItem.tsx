import { EditSVG, TrashSVG } from 'assets/icons'
import { Button } from 'components'
import { Checkbox } from 'components/Checkbox'
import { FC, useEffect, useState } from 'react'
import { Todo } from 'types'

import { setModal } from 'redux/slices/utilitiesSlice'
import { checkedTodo, editTodo, setDeletedId } from 'redux/slices/todosSlice'
import { useAppDispatch } from 'redux/hooks'


interface Props {
    data: Todo
}

const TodoItem: FC<Props> = ({ data: { id, text, closed, updatedAt } }) => {
    const dispatch = useAppDispatch()
    const [clicked, setClicked] = useState(false)
    const [changed, setChanged] = useState(false)
    const [edit, setEdit] = useState<boolean>(false)
    const [changedText, setChangedText] = useState('')
    
    useEffect(() => {
        setChangedText(text)
        setChanged(closed)
        setClicked(false)
    }, [changed, closed, text])
    
    

    const openModal = () => {
        dispatch(setModal(true))
    }

    const onEditItem = () => {
        !closed ? setEdit(!edit) : setEdit(false)
        edit &&  dispatch(editTodo({id, changedText}))
    }

    const onClickItem = () => closed ? setClicked(false) : setClicked(!clicked)
    

    return (
        <div className="todo-item" data-closed={changed} data-clicked={clicked} data-edit={edit} onClick={onClickItem}>
            <header className="item-header">
                <span className="item-id">#{id}</span>
                <span className="item-date">{updatedAt.toLocaleString('en', { hour12: false })}</span>
            </header>
            <div className="item-body" >

                <Checkbox checked={closed} checkedTodo={() => { dispatch(checkedTodo(id))}} />

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
                            onClick={() => { openModal(); dispatch(setDeletedId(id)) }}
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