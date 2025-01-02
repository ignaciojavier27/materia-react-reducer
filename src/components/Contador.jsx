import { useReducer, useState } from "react";

const initialState = { contador:0 };

const reducer = ( state, action ) => {

    switch (action.type) {
        case "INCREMENTAR":
            return { contador: state.contador + 1 }
        case "DECREMENTAR":
            return { contador: state.contador - 1 }
        default:
            return state;
    }

};


const Contador = () => {

    // const [contador, setContador] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);

    // const incrementar = () => setContador(contador + 1);
    const incrementar = () => dispatch({type:"INCREMENTAR"});

    // const decrementar = () => setContador(contador - 1);
    const decrementar = () => dispatch({type:"DECREMENTAR"});


    return (
    <div>
        <h2>Contador Reducer</h2>
        <button onClick={decrementar}>-</button>
        <span style={{margin:"0 10px"}}>{state.contador}</span>
        <button onClick={incrementar}>+</button>
    </div>
    )

};

export default Contador;
