import { EditSVG, TrashSVG } from 'assets/icons'
import { Checkbox } from 'components/Checkbox'
import { FC, useState } from 'react'
import { useEffect } from 'react'

interface Props {
    checked: boolean
}

const TodoItem: FC<Props> = ({ checked }) => {
    const [checkedItem, setChecked] = useState<boolean>(false)

    useEffect(() => {
        setChecked(checked)
    }, [checked])

    return (
        <div className="todo-item" data-closed="false" data-clicked="false" data-edit="false">
            <header className="item-header">
                <span className="item-id">#123456</span>
                <span className="item-date">21:32:44 23.12.2022</span>
            </header>
            <div className="item-body">
                
                <Checkbox checked={checkedItem} onClick={setChecked}/>

                <div className="item-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.
                    {/* <textarea className="item-text-textarea" name="edit_task" id="edit_task">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</textarea> */}
                </div>
                <div className="item-actions">
                    {/* <button type="button" className="btn accent edit"> */}
                    <button type="button" className="btn accent">
                        <EditSVG className="btn-icon" />
                    </button>
                    <button type="button" className="btn warning">
                        <TrashSVG className="btn-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TodoItem