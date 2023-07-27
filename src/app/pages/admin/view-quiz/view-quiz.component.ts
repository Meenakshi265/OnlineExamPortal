import { Component } from '@angular/core';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent {
 constructor(private _quiz:QuizService){}
  quizzes=[
    {
      qid:1,
      title:"aptitude quiz",
      discrption:"this quiz have question related to aptitude",
      maxMarks:"200",
      numberOfQuestion:"20",
      category:{
          qid:1,
          title:""
      },
      active:""
    }
    ,
   
  ]

  deleteQuiz(qid:any){
    Swal.fire(
     {
      icon:"info",
      title:"Arev  you sure you want to delete this quiz",
      confirmButtonText:"Delete",
      showCancelButton:true
     }
    ).then((result)=>{


      if(result.isConfirmed){
        //delete  kaa code

          this._quiz.deleteQuiz1(qid).subscribe(
        (data:any)=>{
           this.quizzes=  this.quizzes.filter((quiz)=>quiz.qid!=qid);
           Swal.fire("Quiz successfull deleted!!","your quiz successfully deleted from the list quiz","success")
        },
        (error)=>{
          Swal.fire("Error!!","something went wrong!!","error")
        }
      );
  
      }
    })

  }

  ngOnInit():void{
    this._quiz.getQuiz().subscribe(
      (data:any)=>{
      this.quizzes=data
      
      console.log(data)
     // Swal.fire("successfull add!!","your category successfully added into category list","success")
     
      },
      (error)=>{
        console.log(error)
        Swal.fire("Error!!","something went wrong!!","error")
      }
    )
  }
}
