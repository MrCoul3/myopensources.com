const initialState = {
    ratesData: null,
    input_1: {
        value: localStorage.getItem('input_1') ? 1 : null,
        currency: localStorage.getItem('input_1') ? localStorage.getItem('input_1') : null
    },
    input_2: {
        value: '',
        currency: localStorage.getItem('input_2') ? localStorage.getItem('input_2') : null
    },
    singleRes_1: '', // результат курса за одну единицу валюты
    singleRes_2: '',
};

export default function reducer(state = initialState, action) {

    let newState = {...state};

    function result() {
        if ((newState.input_1.value && newState.input_1.currency && newState.input_2.currency) !== null) {

            newState.input_2.value =
                (newState.ratesData[`${newState.input_1.currency}`].Value
                * newState.input_1.value
                / newState.ratesData[`${newState.input_2.currency}`].Value).toFixed(2);

            newState.singleRes_1 = `1 ${newState.input_1.currency} = ${(newState.input_2.value / newState.input_1.value).toFixed(2)} ${newState.input_2.currency}`
            newState.singleRes_2 = `1 ${newState.input_2.currency} = ${(newState.input_1.value / newState.input_2.value).toFixed(2)} ${newState.input_1.currency}`
        }
        return newState;
    }

    if (action.type === 'GET_DATA') {
        console.log(action.data)
        newState.ratesData = {...action.data, RUB: {Value: 1}}
        if (localStorage.getItem('input_1')) {
            result();
        }
        return newState;
    }

    if (action.type === 'ERR_DATA') {
        newState.input_2.value = action.data;
        return newState;
    }

    if (action.type === 'SELECT_CURRENCY') {
        newState[`${action.data.name}`].currency = action.data.value;
        localStorage.setItem(action.data.name, action.data.value);
        result();
        return newState;
    }

    if (action.type === 'INPUT_VALUE') {
        newState.input_1.value = action.data;
        result();
        return newState;
    }

    if (action.type === 'CHANGE_CURRENCIES') {
        newState.input_1.currency = localStorage.getItem('input_2');
        newState.input_2.currency = localStorage.getItem('input_1');
        localStorage.setItem('input_1', newState.input_1.currency)
        localStorage.setItem('input_2', newState.input_2.currency)
        result();
        return newState;
    }



    return state;
}