import React from 'react'
import { Input, Paper, Button, Typography } from '@material-ui/core'
import FormErrors from '../FormErrors'
import withHoc from './LoginHoc'

const Login = (props) => {
    const { classes, formValid, handleUserInput, formErrors, email, password, login, onLogin } = props
      
    return (
        <div>
            <Paper className={classes.container}>
                <FormErrors formErrors={formErrors} />
                {login.errorMessage && <Typography className={classes.error}>{login.errorMessage}</Typography>}
                <Input
                    placeholder="Email"
                    name="email"
                    className={classes.input}
                    onChange={handleUserInput}
                    value={email}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={classes.input}
                    onChange={handleUserInput}
                    value={password}
                />
                <Button onClick={() => onLogin(email, password)} disabled={!formValid || login.inProcces}>Войти</Button>
            </Paper>
        </div>
    )
}

export default withHoc(Login)