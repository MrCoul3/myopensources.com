import Box from '@mui/material/Box';
import Field from "./components/Field";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function getApi(url, method) {
    return fetch(url, {method})
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(response.statusText)
            }
        })
}

export const selector = state => state;

export default function CurrencyConverter() {
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

    const dispatch = useDispatch();

    useEffect(() => {
        getApi(url)
            .then(data => {
                dispatch({type: 'GET_DATA', data: data.Valute})
            })
            .catch(e => {
                dispatch({type: 'ERR_DATA', data: 'data load failed...'})
            })
    }, [dispatch]);

    const store = useSelector(selector)


    return (
        <Box id={'CurrencyConverter'}>
            <Stack
                justifyContent="center"
                direction="row"
                mt={16}
                mb={20}>
                <Field currentCurrency={store.input_1.currency}
                       single={store.singleRes_1}
                       value={store.input_1.value}
                       name={'input_1'}
                       type={'number'}
                       disabled={(store.input_1.currency && store.input_2.currency) === null}
                       info={'У меня есть'}/>
                <Tooltip title={'reverse'}>
                    <Button
                        onClick={() => {
                            dispatch({type: 'CHANGE_CURRENCIES'})
                        }}
                        variant="text"
                        style={{margin: 0, fontSize: '36px'}}>
                        <Stack>
                            <Box height={20}>&larr;</Box><Box>&rarr;</Box>
                        </Stack>

                    </Button>
                </Tooltip>

                <Field
                    currentCurrency={store.input_2.currency}
                    single={store.singleRes_2}
                    value={store.input_2.value}
                    name={'input_2'}
                    type={'text'}
                    disabled={true}
                    info={'Я получу'}/>
            </Stack>
        </Box>
    );
}