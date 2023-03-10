import express from 'express'
import {
  listAllCourses,
  showCourse,
  createCourse,
  deleteCourse,
  updateCourse,
  deleteIdCourse
} from '../controllers/courseController.js'

const router = express.Router()

router.get('/', listAllCourses) // SELECT
router.get('/:id', showCourse) // SELECT
router.post('/', createCourse) // INSERT
router.delete('/', deleteCourse) // DELETE
router.delete('/:id', deleteIdCourse) // DELETE
router.put('/', updateCourse) // UPDATE

export default router