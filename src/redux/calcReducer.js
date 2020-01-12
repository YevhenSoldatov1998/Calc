const GET_VALUE = 'GET_VALUE';
const GET_RESULT = 'GET_RESULT';
export const getValue = value => ({type: GET_VALUE, value});
export const getResult = () => ({type: GET_RESULT});
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
    screen: null,
    result: null
}
const calcReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VALUE:
            return {
                screen: state.screen + action.value
            }
        case GET_RESULT:
            return {

            }
        default :
            return state
    }
}
export default calcReducer