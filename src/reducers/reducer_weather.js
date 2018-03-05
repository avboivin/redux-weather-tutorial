import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    console.log('reducer',action);
    switch (action.type) {
        case FETCH_WEATHER:
            console.log(action);
            if(action.payload.data!==undefined){
                return [action.payload.data, ...state];
            }else{
                console.log('city not found :(');
                return state;
            }
    }
    return state;
}