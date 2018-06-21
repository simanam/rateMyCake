const mongoose = require('mongoose');
const   Task = mongoose.model('Task')
const Comment = mongoose.model('Comment')

module.exports = {
    new_task: function(request, response){
        console.log("i am in add new task")
        var task = new Task(request.body)
        task.save(function(err){
            if(err){
            console.log('somethig went worng');
            response.json({message: "Error", error: err})
            }else{
                console.log('successfully added a user');
                response.json({message: "Success"})
            }
        })

    },
    new_comment: function(request, response){
        var comment = new Comment(request.body)
        comment.save(function(err){
            if(err){
            console.log('somethig went worng');
            response.json({message: "Error", error: err})
            }else{
                console.log('successfully added a user');
                response.json({message: "Success"})
            }
        })

    },
    
    retrive_tasks: function(request, response){
        Task.find({}, function(err, tasks){
            if(err){
               console.log("Returned error", err);
                // respond with JSON
               response.json({message: "Error", error: err})
            }
            else {
                // respond with JSON
               response.json({message: "Success", data: tasks})
            }
         })
    },
    delete_task: function(request, response){
        console.log(request.params._id)
        Task.remove({_id: request.params._id}, function(err, task){
            if(err){
                console.log('somethig went worng');
                response.json({message: "Error", error: err})
            }else{
                console.log('successfully delete a user');
                response.json({message: "Success removed"});
            }
    
        })
    
    },
    update_task: function(request, response){
        // console.log(request.body)
        Task.findByIdAndUpdate({_id: request.body._id}, {$set: request.body}, function(err, task){
            if(err){
                console.log('somethig went worng');
                response.json({message: "Error", error: err})
            }else{
                console.log('successfully updated a user', task);
                response.json({message: "Success update"});
            }
    
        })
    },
    show_task: function(request, response){
        console.log(request.params)
       
        Task.findOne({_id: request.params.id}, function(err, cake){
            var data = cake;
            
            if(err){
                console.log('somethig went worng');
                response.json({message: "Error", error: err})
            }else{
                console.log(data);
                response.json({message: "Success", data: cake});
            }
    
        })
    },
}