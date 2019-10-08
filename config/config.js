import {mongoURI, jwtKey} from './keys.dev'

if (process.env.NODE_ENV === 'production') {
    mongoURI = process.env.MONGO_URI
    jwtKey = process.env.JWT
}

export {
    mongoURI,
    jwtKey
}