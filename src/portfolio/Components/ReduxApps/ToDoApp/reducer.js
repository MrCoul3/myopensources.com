
export default  function noteReducer(state = [], action) {


    if (action.type === 'addNote') {
        return [...state, {
            text: action.payload,
            id: action.count,
            completed: false
        }]
    }

    if (action.type === 'deleteNote') {
        return [...state].filter(obj => obj.id !== +action.id);
    }

    if (action.type === 'completeNote') {
        // console.log(action.id)
        const newArr = [...state]
        for (let obj of newArr) {
            if (obj.id === +action.id) {
                obj.completed ? obj.completed = false : obj.completed = true;
            }
        }
        return newArr;
    }


    return state;
}
