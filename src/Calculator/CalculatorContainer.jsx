import {connect} from "react-redux";
import Calculator from "./Calculator";
import {cleanInput, getResult, getValue} from "../redux/calcReducer";

const mapStateToProps = (state) => {
    return {
        data: state
    }
};
const CalculatorContainer = connect(mapStateToProps, {
    getValue,
    getResult,
    cleanInput
})(Calculator);
export default CalculatorContainer