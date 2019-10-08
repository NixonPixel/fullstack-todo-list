import React, { Component } from 'react'

const ValidateHoc = (WrappedComponent) => (
    class extends Component {
        state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false,
            userName: ''
        }

        validateField = (fieldName, value) => {
            let fieldValidationErrors = this.state.formErrors;
            let emailValid = this.state.emailValid;
            let passwordValid = this.state.passwordValid;
            switch (fieldName) {
                case 'email':
                    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                    fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                    break;
                case 'password':
                    passwordValid = value.length >= 6;
                    fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                    break;
                default:
                    break;
            }
            this.setState({
                formErrors: fieldValidationErrors,
                emailValid: emailValid,
                passwordValid: passwordValid
            }, this.validateForm);
        }

        handleUserInput = (e) => {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({[name]: value}, 
                          () => { this.validateField(name, value) });
        }

        validateForm() {
            this.setState({
                formValid: this.state.emailValid &&
                    this.state.passwordValid
            });
        }

        render() {
            return (
                <React.Fragment>
                    <WrappedComponent formErrors={this.state.formErrors} formValid={this.state.formValid} {...this.props} {...this.state} handleUserInput={this.handleUserInput} validateField={this.validateField} />
                </React.Fragment>
            )
        }
    }
)

export default ValidateHoc
