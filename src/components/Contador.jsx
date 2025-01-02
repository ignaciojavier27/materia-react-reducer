import { useReducer } from "react";
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducer";
import { TYPES } from "../actions/contadorActions";


const Contador = () => {

    const [state, dispatch] = useReducer(contadorReducer, contadorInitialState, contadorInit);

    const incrementar = () => dispatch({ type: TYPES.INCREMENTAR});

    const incrementar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 });

    const decrementar = () => dispatch({type: TYPES.DECREMENTAR });

    const decrementar5 = () => dispatch({ type: TYPES.DECREMENTAR_5, payload: 5});

    const resetear = () => dispatch({ type: TYPES.RESETEAR });



    return (
    <div>
        <h2>Contador Reducer</h2>
        <button onClick={decrementar5}>-5</button>
        <button onClick={decrementar}>-</button>
        <span 
            style={{margin:"0 10px"}}
            onClick={resetear}
        >
            {state.contador}
        </span>
        <button onClick={incrementar}>+</button>
        <button onClick={incrementar5}>+5</button>
    </div>
    )

};

export default Contador;
