import {Router} from 'express'
import {getAllTodo, createTodo, deleteTodo, updateTodo, getTodoById} from '../controllers/todo'
import passport from 'passport'
import multer from 'multer'

const upload = multer()

const router = Router()

router.get('/', getAllTodo)
router.post('/', createTodo)
router.delete('/:id', passport.authenticate('jwt', {session: false}), deleteTodo)
router.patch('/:id', passport.authenticate('jwt', {session: false}), updateTodo)
router.get('/:id', getTodoById)

export default router

