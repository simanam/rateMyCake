import { Component, OnInit } from '@angular/core';
import {TasksService} from './tasks.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cakes';
  newTask: any;
  newComment: any;
  tasks = [];
  modifyTask : any;
  addComment: any;
  selectedCakes: any;
  
  selectedCake: any;

  
  editClicked: boolean;


  constructor(private _taskService: TasksService){ }
  ngOnInit(){
    this.newTask = {baker: " ", url: " "};
    this.editClicked= false;
    this.getTasksFromService();
    
  }
  onSubmit(){
    
    let observable =  this._taskService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      
      this.newTask = {baker: " ", url: " "}
      this.getTasksFromService()
    })  }
    getTasksFromService(){
      let tempObservable = this._taskService.getTasks();
      tempObservable.subscribe(data => {
        // console.log("Got our tasks!", data)
        this.tasks = data['data'];
        
        
  
    
    });
    }
    onComment(cake, myform){
      console.log(myform)
      let newComObj = {
        rating: myform.value.rating,
        comment: myform.value.comment
      }

      let comObservable = this._taskService.addComment(newComObj);
      comObservable.subscribe(data => {
        console.log("added comment", data)
      })
      this.addComment = cake;
      this.addComment.comments.push(newComObj);
      let editObservalble = this._taskService.editTask(cake._id, this.addComment);
      editObservalble.subscribe(data => {
            // console.log("edting task", data);
            this.getTasksFromService()
            
            
          })
          this.newComment = {comment:" ", rating: ""}
  

    }
    cakeToShow(task){
      this.selectedCakes = task;
      let showObservable = this._taskService.showTask(task._id);
      showObservable.subscribe(data => {
        this.selectedCake = data;

      });
    }
    




    // destroyTask(id){
    //   let deleteObservable = this._taskService.deleteTask(id);
    //   deleteObservable.subscribe(data => {});
    //   this.getTasksFromService()

    // }
    // editSomething(id, myform){
    //   // console.log(myform)
    //   let newObject = { 
    //     _id: id, 
    //     title: myform.value.title, 
    //     description: myform.value.description
    //   }
      
    //   let editObservalble = this._taskService.editTask(id, newObject);
    //   editObservalble.subscribe(data => {
    //     // console.log("edting task", data);
    //     this.getTasksFromService()
    //     this.editClicked= false;
        
    //   })

    // }

    // editButtonClicked(task){
    //   this.editClicked = true;
    //   this.modifyTask = task
      

    // }

}
