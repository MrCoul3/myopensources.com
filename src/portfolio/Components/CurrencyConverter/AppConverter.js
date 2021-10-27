import {Provider} from "react-redux";
import reduxStore from "./reduxStore";
import CurrencyConverter from "./CurrencyConverter";
import './AppConverter.scss';

export default function AppConverter() {
    return (
        <Provider store={reduxStore}>
            <CurrencyConverter />
        </Provider>
        );
}