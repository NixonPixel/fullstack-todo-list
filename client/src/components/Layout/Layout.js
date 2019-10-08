import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar} from '@material-ui/core'
import withHoc from './LayoutHoc'

const Layout = ({ children, classes, accessDenied, exit }) => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar className={classes.toolBar}>
                    {accessDenied
                        ? <React.Fragment>
                            <NavLink activeClassName={classes.activeAuthLink} className={classes.authLink} style={{ color: 'inherit' }} to="/registration">
                                Зарегистрироватсья
                            </NavLink>
                            <NavLink activeClassName={classes.activeAuthLink} className={classes.authLink} style={{ color: 'inherit' }} to="/login">
                                    Войти
                            </NavLink>
                        </React.Fragment> 
                        : <NavLink onClick={exit} activeClassName={classes.activeAuthLink} className={classes.authLink} style={{ color: 'inherit' }} to="/login">
                            Выйти
                          </NavLink>
                    }
                </Toolbar>
            </AppBar>
            <main className={classes.main}>
                {children}
            </main>
        </React.Fragment>
    )
}

export default withHoc(Layout)