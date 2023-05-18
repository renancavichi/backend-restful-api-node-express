import express from 'express'
import {
  listAllUsers,
  showUser,
  createUser,
  deleteUser,
  updateUser,
  deleteIdUser
} from '../controllers/userController.js'
import authenticated from '../middlewares/authenticated.js'

const router = express.Router()

router.get('/', listAllUsers) // SELECT
router.get('/:id', showUser) // SELECT
router.post('/', createUser) // INSERT
router.delete('/', authenticated, deleteUser) // DELETE ID FROM BODY JSON
router.delete('/:id', authenticated, deleteIdUser) // DELETE ID FROM PARAMS
router.put('/', authenticated, updateUser) // UPDATE

export default router