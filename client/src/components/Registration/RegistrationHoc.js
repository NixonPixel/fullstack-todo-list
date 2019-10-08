import { compose } from "recompose";
import withStyles from './style'
import ValidateHoc from '../ValidateHoc'
import {connect} from 'react-redux'
import {registration} from '../../actions/actions'

const mapStateToProps = ({auth:{registration}}) => ({
    registration
})

const mapDispatchToProps = (dispatch) => (
    {onRegistration: (email, password, userName) => registration(dispatch, email, password, userName)}
)

export default compose(withStyles, ValidateHoc, connect(mapStateToProps, mapDispatchToProps))