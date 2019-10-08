import { connect } from 'react-redux'
import { compose } from 'recompose'
import {checkToken} from '../../actions/actions'

const mapStateToProps = ({ auth: { login } }) => ({
    accessDenied: login.accessDenied
})

const mapDispatchToProps = (dispatch) => {
    return {
        checkToken: () => checkToken(dispatch)
    }
}  

export default compose(connect(mapStateToProps, mapDispatchToProps))