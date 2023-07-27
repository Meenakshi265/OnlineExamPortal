import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent {
constructor(private _route:ActivatedRoute,private _question:QuestionService,private _quiz:QuizService){}
qId=0;
qTitle="";
questionData=[
  {
    "quesId":0,
    "content":"",
    "image": "",
    "option1":"",
    "option2":"",
    "option3":"",
    "option4":"",
    "answer":"",
    "quiz": {
        "qid": null,
    }
  }
]

ngOnInit():void{
  this.qId= this._route.snapshot.params['qid'];
  console.log(this.qId)
this._quiz.getSingleQuiz(this.qId).subscribe(
  (data:any)=>{
    this.qTitle=data.title;
    console.log(this.qTitle)
  }
)
  this._question.getQuetion(this.qId).subscribe(
    (data:any)=>{
   console.log(data)
   this.questionData=data;
    },
    (error)=>{
         console.log(error)

    }
  )
}


deleteQuestion(quesId:any){
   console.log(quesId)

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

         this._question.deleteQuetion(quesId).subscribe(
       (data:any)=>{
          this.questionData=  this.questionData.filter((ques)=>ques.quesId!=quesId);
          Swal.fire("Quiz successfull deleted!!","your quiz successfully deleted from the list quiz","success")
       },
       (error)=>{
         Swal.fire("Error!!","something went wrong!!","error")
       }
     );
 
     }
   })

}
}