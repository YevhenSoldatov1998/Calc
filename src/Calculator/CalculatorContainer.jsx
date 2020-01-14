import {connect} from "react-redux";
import Calculator from "./Calculator";
import {cleanInput, cleanLastValue, getResult, getValue} from "../redux/calcReducer";

const mapStateToProps = (state) => {
    return {
        data: state
    }
};
const CalculatorContainer = connect(mapStateToProps, {
    getValue,
    getResult,
    cleanInput,
    cleanLastValue
})(Calculator);
export default CalculatorContainer