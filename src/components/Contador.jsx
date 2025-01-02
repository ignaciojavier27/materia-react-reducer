import { useReducer } from "react";

const initialState = { contador:0 };

const TYPES = {
    INCREMENTAR: "INCREMENTAR",
    INCREMENTAR_5: "INCREMENTAR_5",
    DECREMENTAR: "DECREMENTAR",
    DECREMENTAR_5: "DECREMENTAR_5",
    RESETEAR: "RESETEAR"
}

const reducer = ( state, action ) => {

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


const Contador = () => {

    // const [contador, setContador] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);

    // const incrementar = () => setContador(contador + 1);
    const incrementar = () => dispatch({ type: TYPES.INCREMENTAR});

    const incrementar5 = () => dispatch({ type: TYPES.INCREMENTAR_5, payload: 5 });

    // const decrementar = () => setContador(contador - 1);
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
