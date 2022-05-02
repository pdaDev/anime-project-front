import {authThunks} from "../../../../store/Auth/Auth.thunks";
import {AuthFormRegister} from "./AuthFormRegister";
import {connect} from "react-redux";
const {register} = authThunks

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
    registerUser: (login, password) => dispatch(register(login, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthFormRegister)