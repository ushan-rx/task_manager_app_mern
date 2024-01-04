const express = require('express')
const { getAllTasks, 
        createTask, 
        getTask, 
        updateTask, 
        deleteTask } = require('../controllers/tasks')
const router = express.Router()

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);  //patch is used bcz it doesnt overwrite data

module.exports = router