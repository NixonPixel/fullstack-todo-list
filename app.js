import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { mongoURI } from './config/config'
import authRoutes from './routes/auth'
import todoRoutes from './routes/todo'
import bodyParser from 'body-parser'
import passport from 'passport'
import passportStrategy from './middleware/passport'
import cors from 'cors'

mongoose
    .connect(mongoURI,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
    .then(() => console.log('Connection to the database was successful'))
    .catch(error => console.log(error));

const app = express()

app.use(cors())
app.use(passport.initialize())
passportStrategy(passport)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/todo', todoRoutes)

console.log( path.resolve(
    __dirname, 'client', 'build', 'index.html'
))

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, 'client', 'build', 'index.html'
            )
        )
    })
}


export default app