import { compose } from "recompose";
import withStyles from './style'
import ValidateHoc from '../ValidateHoc'
import {connect} from 'react-redux'
import {login} from '../../actions/actions'

const mapStateToProps = ({auth:{login, registration}}) => ({
    login, registrationEmail: registration.email
})

const mapDispatchToProps = (dispatch) => ({
    onLogin: (email, password) => login(dispatch, email, password)
})

export default compose(withStyles, ValidateHoc, connect(mapStateToProps, mapDispatchToProps))