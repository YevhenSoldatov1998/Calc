const GET_VALUE = 'GET_VALUE';
const GET_RESULT = 'GET_RESULT';
const CLEAN_INPUT = 'CLEAN_INPUT';
const CLEAN_LAST_VALUE = 'CLEAN_LAST_VALUE';

export const getValue = value => ({type: GET_VALUE, value});
export const getResult = () => ({type: GET_RESULT});
export const cleanInput = () => ({type: CLEAN_INPUT});
export const cleanLastValue = () => ({type: CLEAN_LAST_VALUE});

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
        {id: 16, value: '.'},
        {id: 17, value: '←'},
    ],
    screen: '',
    firstChild: null,
    lastSymbol: null
}
const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_VALUE:
            if (isNaN(action.value) && action.value !== '.') { //if !number
                if (!state.lastSymbol) {
                    return {
                        ...state,
                        screen: state.screen + action.value,
                        lastSymbol: action.value,
                        result: null,
                    };
                } else {
                    if (state.screen) {
                        let newStr = state.screen.substr(0, state.screen.length - 1)
                        return {
                            ...state,
                            screen: newStr + action.value,
                            result: null,
                            lastSymbol: action.value
                        }
                    } else {
                        return {
                            ...state,
                            screen: '',
                            result: null,
                            lastSymbol: action.value
                        };
                    }

                }

            } else if (action.value === '.') {
                return {
                    ...state,
                    result: null,
                    screen: state.screen + action.value
                }
            }

            if(!isNaN(action.value)){ //if number
                debugger
                return {
                    ...state,
                    result: null,
                    screen: state.screen + action.value,
                    lastSymbol: null
                };
            }

        case GET_RESULT:

            if(!state.lastSymbol){
                let strToMath = eval(state.screen);
                debugger
                return {
                    ...state,
                    screen: String(strToMath)
                }
            } else {
                alert('incorect')
                return {
                    ...state
                }
            }

        case CLEAN_INPUT:
            debugger
            return {
                ...state,
                screen: '',
                result: null,
                lastSymbol: null
            };
        case CLEAN_LAST_VALUE:
            if(state.screen.length>0){
                let newScreen = state.screen.split('').splice(0, state.screen.length -1 ).join('');

                return{
                    ...state,
                    screen: newScreen
                }
            }
        default :
            return state
    }
}
export default calcReducer