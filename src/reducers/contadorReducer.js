import { TYPES } from "../actions/contadorActions";

export const contadorInitialState = { contador:0 };

export const contadorInit = ( contadorInitialState ) => {
    return { contador: contadorInitialState.contador + 10 }
}

export const contadorReducer = ( state, action ) => {

    switch (action.type) {
        case TYPES.INCREMENTAR:
            return { contador: state.contador + 1 }
        case TYPES.DECREMENTAR:
            return { contador: state.contador - 1 }
        case TYPES.DECREMENTAR_5:
            return { contador: state.contador - action.payload }
        case TYPES.INCREMENTAR_5:
            return { contador: state.contador + action.payload }
        case TYPES.RESETEAR:
            return { contador: 0 }
        default:
            return state;
    }

};