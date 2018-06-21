const mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    rating: {type: Number, default:0, maxlength:5},
    comment: {type: String, default: " "},
    
}, {timestamps: true})

mongoose.model('Comment', CommentSchema)
module.exports =  CommentSchema;