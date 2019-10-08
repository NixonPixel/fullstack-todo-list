import withStyles from './style'
import {compose} from 'recompose'
import {connect} from 'react-redux'
import {exit} from '../../actions/actions'

const mapStateToProps = ({ auth: { login } }) => ({
    accessDenied: login.accessDenied
})

const mapDispatchToProps = (dispatch) => ({
    exit: () => exit(dispatch)
})

export default compose(withStyles, connect(mapStateToProps, mapDispatchToProps))