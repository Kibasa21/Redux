import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++; //ainda não pode, mas o toolkit vê isso e corrige pra nois
        },//já aqui pode mutate o state
        decrement(state) {
            state.counter--; //ainda não pode, mas o toolkit vê isso e corrige pra nois
        },
        increase(state, action) {
            state.counter += action.payload; // qualquer dado extra que vc der ao usar uma ação, nesse caso o numero que vai aumentar no counter, vai para o payload da action.
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export default counterSlice.reducer;