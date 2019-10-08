import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import withHoc from './AppHoc'
import Home from '../Home'
import Layout from '../Layout'
import Registration from '../Registration'
import Login from '../Login'
import CreateTodo from '../CreateTodo'

class App extends Component {
    componentDidMount() {
        this.props.checkToken()
    }
    render() {
        return (
            <Router>
                <Switch>
                    {this.props.accessDenied
                        ? <React.Fragment>
                            <Route exact path="/" component={() => (<Layout><Home /></Layout>)}></Route>
                            <Route path="/registration" component={() => (<Layout><Registration /></Layout>)}></Route>
                            <Route path="/login" component={() => (<Layout><Login /></Layout>)}></Route>
                            <Route path="/add-todo" component={() => (<Layout><CreateTodo /></Layout>)}></Route>
                            <Redirect to="/" />
                        </React.Fragment>
                        : <React.Fragment>
                            <Route exact path="/" component={() => (<Layout><Home /></Layout>)}></Route>
                            <Route path="/add-todo" component={() => (<Layout><CreateTodo /></Layout>)}></Route>
                            <Redirect to="/" />
                        </React.Fragment>
                    }
                </Switch>
            </Router>

        )
    }
}

export default withHoc(App)