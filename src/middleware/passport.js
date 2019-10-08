import {Strategy} from 'passport-jwt'
import {ExtractJwt} from 'passport-jwt'
import mongoose from 'mongoose'
import {jwtKey} from '../../config/config'
const User = mongoose.model('users')


const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: jwtKey
}

export default passport => {
  passport.use(
    new Strategy(options, async (payload, done) => {
      try {
        const user = await User.findById(payload.userId).select('email id userName')
        if (user) {
          done(null, user)
        } else {
          done(null, false)
        }
      } catch (e) {
        console.log(e)
      }

    })
  )
}