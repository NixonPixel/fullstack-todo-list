import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/User'
import { jwtKey } from '../../config/config'
import errorHandler from '../utils/errorHandler'

const login = async function (req, res) {
  const candidate = await User.findOne({ email: req.body.email })
  console.log(req.body)
  if (candidate) {
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id,
        userName: candidate.userName
      }, jwtKey, { expiresIn: 60 * 60 })

      res.status(200).json({
        status: "ok",
        message: {
          token: `Bearer ${ token }`
        }
      })
    } else {
      errorHandler(res, { message: 'Пароли не совпадают. Попробуйте снова.', status: 401 })
    }
  } else {
    errorHandler(res, {message: 'Пользователь с таким email не найден.', status: 404})
  }
}

const register = async function(req, res) {
    const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    errorHandler(res, {message: 'Такой email уже занят. Попробуйте другой.', status: 409})
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
      userName: req.body.userName
    })

    try {
      await user.save()
      res.status(201).json({ 
        status: "ok",
        message: {
          user
        }
      })
    } catch(e) {
      errorHandler(res, {message: e.message})
    }

  }
}

export {
  login,
  register
}