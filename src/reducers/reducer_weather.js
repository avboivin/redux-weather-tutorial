import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    console.log('reducer',action);
    switch (action.type) {
        case FETCH_WEATHER:
            console.log(action);
            return [action.payload.data, ...state];
    }
    return state;
}