import {connect} from "react-redux";
import {authSelectors} from "../../../utils/selectors/Auth.selectors";
import {Header} from "./Header";
import {catalogActions} from "../../../store/Catalog/Catalog.actions";
import {profileSelectors} from "../../../utils/selectors/Profile.selectors";
import {authThunks} from "../../../store/Auth/Auth.thunks";
const {logout} = authThunks

const {setPopulars, setNovelties} = catalogActions
const mapStateToProps = (state) => ({
   isAuth: authSelectors.getAuthStatus(state),
   userImg: authSelectors.getImg(state),
   userId: profileSelectors.getOwnerId(state)
})
export default connect(mapStateToProps, {setPopulars, setNovelties, logout}) (Header)

