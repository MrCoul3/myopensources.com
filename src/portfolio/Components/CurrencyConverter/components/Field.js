import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import {useDispatch} from "react-redux";

export default function Field(props) {
    const inpData = [
        {v: 'RUB', d: 'Российский рубль', id: 1},
        {v: 'USD', d: 'Доллар США', id: 2},
        {v: 'EUR', d: 'ЕВРО', id: 3},
        {v: 'GBP', d: 'Фунт стерлингов', id: 4}
    ];

    const dispatch = useDispatch();

    const selectChange = (e) => {
        dispatch({type: 'SELECT_CURRENCY', data: e.target})
    };

    const inputChange = (e) => {
        dispatch({type: 'INPUT_VALUE', data: e.target.value})
    }


    return (
        <Box sx={{
            marginLeft: '0',
            minWidth: 120,
            border: 1,
            maxWidth: 400,
            height: 200,
            borderRadius: 2,
            borderColor: '#CDCDCD'
        }}>

            <FormControl variant="standard" style={{maxWidth: '394px', borderColor: '#CDCDCD'}} fullWidth>
                <span style={{position: "absolute", bottom: '60px', color: '#71767A'}}>{props.info}</span>
                <InputLabel id="demo-simple-select-label" sx={{marginLeft: 2}}>Выберите валюту</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    value={props.currentCurrency}
                    onChange={selectChange}
                    name={props.name}
                    sx={{height: 44, paddingLeft: 3, maxWidth: 400}}
                    >
                    {inpData.map(({v, d, id}) =>
                        <MenuItem key={id} value={v}>{v}<span style={{color: '#71767A', marginLeft: '5px'}}>{d}</span></MenuItem>
                    )}
                </Select>
            </FormControl>
            <input
                disabled={props.disabled}
                onChange={inputChange}
                style={{
                    paddingLeft: '10px',
                    width: '390px',
                    outline: 'none',
                    border: 0,
                    height: '60px',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    backgroundColor: '#fff'
                }}
                type={props.type}
                value={props.value}/>
            <div style={{margin: '31px 10px 16px'}}>{props.single}</div>
        </Box>
    );
}