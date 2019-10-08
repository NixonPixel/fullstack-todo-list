import { compose } from "recompose";
import withStyles from './style'
import {setDoneTodo} from '../../actions/actions'
import {connect} from 'react-redux'


const mapStateToProps = ({ auth: { login } }) => ({
    accessDenied: login.accessDenied
})

const mapDispatchToProps = (dispatch) => {
    return {
        setDoneTodo: (id) => setDoneTodo(dispatch, id),
        
    }
}


export default compose(withStyles, connect(mapStateToProps, mapDispatchToProps))