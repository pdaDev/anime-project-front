import {connect} from "react-redux";
import {authThunks} from "../../../../store/Auth/Auth.thunks";
import {AuthFormLogin} from "./AuthFormLogin";

const {login} = authThunks
const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {login}) (AuthFormLogin)