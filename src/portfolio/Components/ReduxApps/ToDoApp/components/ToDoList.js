import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";

const selector = state => state;

export default function ToDoList() {
    const dispatch = useDispatch();

    const handleDeleteNote = (e) => {
        dispatch({type: 'deleteNote', id: e.target.id})
    }
    const handleCompleteNote = (e) => {
        dispatch({type: 'completeNote', id: e.target.closest('div').id})
    }
    const currentState = useSelector(selector);

    const [filteredArray, setFilteredArray] = useState([]);

    useEffect(()=> {
        // console.log(currentState)
        setFilteredArray(currentState)
    }, [currentState])

    const handleFilterAll = () => {
        setFilteredArray(currentState);
    }
    const handleFilterActive = () => {
        setFilteredArray([...currentState].filter(obj => !obj.completed));
    }
    const handleFilterCompleted = () => {
        setFilteredArray([...currentState].filter(obj => obj.completed));
    }


    const renderToDoList = filteredArray.map(obj =>
        <div
            status={obj.completed ? 'completed' : 'active'}
            onClick={handleCompleteNote}
            id={obj.id}
            className={'note-element m-auto d-flex justify-content-between'}>
            <span className='verify'><strong style={obj.completed ? { display: 'block'} : {display: 'none'}}>&#10003;</strong></span>
            <span style={{paddingLeft: '10px'}} className={'text-start  w-100 ' + (obj.completed ? 'note-completed' : '')}>{obj.text}</span>
            <span className='delete-btn' id={obj.id} onClick={handleDeleteNote}>delete</span>
        </div>)


    return (
        <div className='body'>
            {renderToDoList}
            <div className='service-buttons d-flex m-auto justify-content-around'>
                <button onClick={handleFilterAll} className='btn btn-secondary'>All</button>
                <button onClick={handleFilterActive} className='btn btn-secondary'>Active</button>
                <button onClick={handleFilterCompleted} className='btn btn-secondary'>Completed</button>
            </div>
        </div>
    );
}
