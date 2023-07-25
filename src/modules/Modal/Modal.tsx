import React from 'react'
import { Button } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from 'redux/slices/utilitiesSlice'
import { deleteTodoRedux } from 'redux/slices/todosSlice'


const Modal = () => {
    const deletedId = useSelector((state: any) => state.todosReducer.deletedId)
    const dispatch = useDispatch();
    const closeModal = () => {
        dispatch(setModal(false))
    }

    const deleteTodo = () => {
        dispatch(deleteTodoRedux(deletedId))
    }

    return (
        <div onClick={closeModal} className='modal-wrapper'>
            <div onClick={e => e.stopPropagation()} className='modal'>
                <h1 className='modal-title'>Delete item #{deletedId}?</h1>
                <p className='modal-text'>Are you sure, want to delete this item?</p>
                <div className="modal-btns">
                    <Button className='btn' text='Delete' onClick={() => { closeModal(); deleteTodo(); }} />
                    <Button className='modal-cancel' text='Cancel' onClick={() => closeModal()} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
