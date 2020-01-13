const GET_VALUE = 'GET_VALUE';
const GET_RESULT = 'GET_RESULT';
const CLEAN_INPUT = 'CLEAN_INPUT';

export const getValue = value => ({type: GET_VALUE, value});
export const getResult = () => ({type: GET_RESULT});
export const cleanInput = () => ({type: CLEAN_INPUT});

const initialState = {
    areas: [
        {id: 0, value: '1'},
        {id: 1, value: '2'},
        {id: 2, value: '3'},
        {id: 3, value: '+'},
        {id: 4, value: '4'},
        {id: 5, value: '5'},
        {id: 6, value: '6'},
        {id: 7, value: '-'},
        {id: 8, value: '7'},
        {id: 9, value: '8'},
        {id: 10, value: '9'},
        {id: 11, value: '*'},
        {id: 12, value: 'C'},
        {id: 13, value: '0'},
        {id: 14, value: '='},
        {id: 15, value: '/'},
    ],
    screen: '',
    result: null,
    lastChild: null
}
const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VALUE:
            if (isNaN(action.value)) {
                if(!state.lastChild){
                    return {
                        ...state,
                        screen: state.screen + action.value,
                        lastChild: action.value
                    };
                }
                else{
                    return {
                        ...state,

                        lastChild: action.value
                    };
                }

            }
            else{
            debugger
                return {
                    ...state,
                    screen: state.screen + action.value,
                    lastChild: null
                };
            }

        case GET_RESULT:
            debugger
            let strToMath = eval(state.screen);
            return {
                ...state,
                result: strToMath
            }
        case CLEAN_INPUT:
            return {
                ...state,
                screen: '',
                result: null
            }
        default :
            return state
    }
}
export default calcReducer