const mongoose = require('mongoose');
const CommentSchema = require('./comment_model')
var TaskSchema = new mongoose.Schema({
    baker: {type: String, required: true},
    url: {type: String, default: " "},
    comments: [CommentSchema]
}, {timestamps: true})

mongoose.model('Task', TaskSchema)