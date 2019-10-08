import React, { Component } from 'react'
import { Input, Paper, Button, Typography } from '@material-ui/core'
import withHoc from './RegistrationHoc'
import FormErrors from '../FormErrors'

class Registration extends Component {

    render() {
        const { classes, formValid, handleUserInput, formErrors, email, password, userName, registration, onRegistration } = this.props

        const registrationValid = formValid && Boolean(userName)
        return (
            <div>
                <Paper className={classes.container}>
                    <FormErrors formErrors={formErrors} />
                    {registration.errorMessage && <Typography className={classes.error}>{registration.errorMessage}</Typography>}
                    <Input
                        placeholder="Email"
                        name="email"
                        className={classes.input}
                        onChange={handleUserInput}
                    />
                    <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={classes.input}
                        onChange={handleUserInput}
                    />
                    <Input
                        placeholder="User Name"
                        className={classes.input}
                        name="userName"
                        onChange={handleUserInput}
                    />
                    <Button onClick={() => onRegistration(email, password, userName)} disabled={!registrationValid || registration.inProcces}>Регистрация</Button>
                </Paper>
            </div>
        )
    }
}

export default withHoc(Registration)