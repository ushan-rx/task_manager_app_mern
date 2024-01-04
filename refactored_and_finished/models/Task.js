// task model object is defined for mongoose

const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must proide name'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters'],
        // overwrite: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)