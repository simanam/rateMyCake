const taskcontroller = require('../controllers/tasks_cntrl.js')

module.exports = function(app){
    app.post('/new', taskcontroller.new_task )
    app.get('/all', taskcontroller.retrive_tasks )
    app.delete('/remove/:_id', taskcontroller.delete_task)
    app.put('/edit/:id', taskcontroller.update_task)
    app.post('/comment', taskcontroller.new_comment)
    app.get('/show/:id', taskcontroller.show_task)

}