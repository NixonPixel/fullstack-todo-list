import { compose } from "recompose";
import withStyles from './style'
import {withRouter} from 'react-router-dom'

export default compose(withStyles, withRouter)