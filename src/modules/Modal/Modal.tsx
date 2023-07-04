import React from 'react'
import { FC } from 'react'
import { Button } from 'components'

interface Props {
    close: () => void
    confirmDelete: () => void
    active: Boolean
}

const Modal: FC<Props> = ({ close, confirmDelete, active }) => {
    return (
        <div onClick={close} className='modal'>
            <div onClick={e => e.stopPropagation()} className='modal-content'>
                <h1 className='modal-title'>Are you sure?</h1>
                <Button className='btn' text='Delete task' onClick={() => { close(); confirmDelete() }} />
                <Button className='btn' text='Cancel' onClick={() => close()} />
            </div>
        </div>
    );
}

export default Modal;
