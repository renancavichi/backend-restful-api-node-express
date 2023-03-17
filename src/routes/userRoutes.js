import express from 'express'
import {
  listAllUsers,
  showUser,
  createUser,
  deleteUser,
  updateUser,
  deleteIdUser
} from '../controllers/userController.js'

const router = express.Router()

router.get('/', listAllUsers) // SELECT
router.get('/:id', showUser) // SELECT
router.post('/', createUser) // INSERT
router.delete('/', deleteUser) // DELETE ID FROM BODY JSON
router.delete('/:id', deleteIdUser) // DELETE ID FROM PARAMS
router.put('/', updateUser) // UPDATE

export default router