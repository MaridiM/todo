import { EditSVG, TrashSVG } from 'assets/icons'
import { Checkbox } from 'components/Checkbox'
import { FC, useState } from 'react'
import { useEffect } from 'react'


interface Props {
    checked: boolean
    id: number
    text: string
    closed: boolean
    createdAt: string
    updatedAt: string

}

const TodoItem: FC<Props> = ({ checked, id, text, closed, createdAt, updatedAt }) => {


    const [checkedItem, setChecked] = useState<boolean>(false)
    const [editedItem, setEdited] = useState<boolean>(false)
    const [clickedItem, setClicked] = useState(false);


    useEffect(() => {
        if (checked !== checkedItem) {
            checked = checkedItem;
        }
        setChecked(checked)
    }, [checked, checkedItem])

    console.log(checked);

    return (
        <div onClick={() => { }} className="todo-item" data-closed={checkedItem} data-clicked={clickedItem} data-edit={editedItem}>
            <header className="item-header">
                <span className="item-id">#{id}</span>
                <span className="item-date">{createdAt}</span>
            </header>
            <div className="item-body">

                <Checkbox checked={checkedItem} onClick={setChecked} />

                <div className="item-text">

                    {editedItem ? <textarea className="item-text-textarea" name="edit_task" id="edit_task" defaultValue={text}></textarea> : text}

                </div>
                <div className="item-actions">
                    <button onClick={!checkedItem ? () => setEdited(!editedItem) : () => setEdited(false)} type="button" className={'btn accent'}>
                        <EditSVG className="btn-icon" />
                    </button>
                    {!editedItem && <button type="button" className="btn warning">
                        <TrashSVG className="btn-icon" />
                    </button>}
                </div>
            </div>
        </div>
    )
}
export default TodoItem