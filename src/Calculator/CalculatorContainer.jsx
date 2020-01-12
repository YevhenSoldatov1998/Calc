import {connect} from "react-redux";
import Calculator from "./Calculator";
import {getResult, getValue} from "../redux/calcReducer";

const mapStateToProps = (state) => {
    return {
        data: state
    }
};
const CalculatorContainer = connect(mapStateToProps, {
    getValue,
    getResult
})(Calculator);
export default CalculatorContainer