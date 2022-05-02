import {useEffect, useState} from "react";
import {Profile} from "./Profile";
import {profileSelectors as s}  from "../../utils/selectors/Profile.selectors";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import {profileThunks as t} from "../../store/Profile/Profile.thunks";
const {getRatingList, getProfileInfo, getRatingListItemElements} = t

const mapStateToProps =(state) => ({
    id: s.getId(state),
    ratingList: s.getRatingList(state),
    profileInfo: s.getProfileInfo(state),
    ownerId: s.getOwnerId(state)
})


const ProfileContainer = ({ownerId, ...props}) => {
    const [isEdit, openEdit] = useState(false)
    const toggleEdit = () => {
        openEdit(!isEdit)
    }
    useEffect(()=>{
        props.getProfileInfo()
        props.getRatingList()
    },[])
    return (
        <Profile {...props} toggleEdit={toggleEdit} isEdit={isEdit}/>
    )
}

export default connect(mapStateToProps, {getRatingList, getProfileInfo, getRatingListItemElements})(ProfileContainer)