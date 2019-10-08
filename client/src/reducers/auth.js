import { AUTH_FAILURE, AUTH_IN_PROCCES, AUTH_SUCCESS, LOG_OUT, REGISTRATION_FAILURE, REGISTRATION_IN_PROCCES, REGISTRATION_SUCCESS } from '../actions/types'

const auth = (state, action) => {
    if (state === undefined) {
        return {
            login: {
                inProcces: false,
                errorMessage: '',
                accessDenied: true
            },
            registration: {
                inProcces: false,
                errorMessage: '',
                email: ''
            }
        }
    }
    switch (action.type) {
        case AUTH_FAILURE: {
            return {
                ...state.auth,
                login: {
                    inProcces: false,
                    errorMessage: action.payload,
                    accessDenied: true
                }
            }
        }
        case LOG_OUT: {
            return {
                ...state.auth,
                login: {
                    inProcces: false,
                    errorMessage: '',
                    accessDenied: true
                }
            }
        }
        case AUTH_IN_PROCCES: {
            return {
                ...state.auth,
                login: {
                    inProcces: true,
                    errorMessage: '',
                    accessDenied: true
                }
            }
        }
        case AUTH_SUCCESS: {
            return {
                ...state.auth,
                login: {
                    inProcces: false,
                    errorMessage: '',
                    accessDenied: false
                }
            }
        }
        case REGISTRATION_FAILURE: {
            return {
                ...state.auth,
                registration: {
                    inProcces: false,
                    errorMessage: action.payload,
                    email: ''
                }
            }
        }
        case REGISTRATION_IN_PROCCES: {
            return {
                ...state.auth,
                registration: {
                    inProcces: true,
                    errorMessage: '',
                    email: ''
                }
            }
        }
        case REGISTRATION_SUCCESS: {
            return {
                ...state.auth,
                registration: {
                    inProcces: false,
                    errorMessage: '',
                    email: action.payload
                }
            }
        }


        default:
            return state.auth
    }
}

export default auth