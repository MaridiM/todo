import React from 'react'
import { FC } from 'react'
import { Button } from 'components'

interface Props {
    close: () => void
    confirmDelete: () => void
    active: Boolean
    id: number
}

const Modal: FC<Props> = ({ close, confirmDelete, active, id }) => {
    return (
        <div onClick={close} className='modal-wrapper'>
            <div onClick={e => e.stopPropagation()} className='modal'>
                <h1 className='modal-title'>Delete item #{id}?</h1>
                <p className='modal-text'>Are you sure, want to delete this item?</p>
                <div className="modal-btns">
                    <Button className='btn' text='Delete' onClick={() => { close(); confirmDelete() }} />
                    <Button className='modal-cancel' text='Cancel' onClick={() => close()} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
