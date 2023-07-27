import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent {
 constructor(private _route:ActivatedRoute,
  private _quiz:QuizService,private category:CategoryService,private snackbar:MatSnackBar
  
  ){}
 qId=0;

 categories=[{
  cid:1,
  title:"Programing quzi",
  description:""
}]
 quizData={
    qid:1,
    title:"",
    discrption:"",
    maxMarks:"",
    numberOfQuestion:"",
    category:{
      cid:''
    },
    active:"false"

 }
 ngOnInit():void{
this.qId= this._route.snapshot.params['qid'];

console.log(this.qId)


this._quiz.getSingleQuiz(this.qId).subscribe(
  (data:any)=>{
      this.quizData=data;
    console.log(this.quizData)
  },
  (error)=>{
    console.log(error)
  }

)


this.category.getCategories().subscribe(
  (data:any)=>{
    this.categories=data
    console.log(data)
  },
  (error:any)=>{
  console.log(error)

  }
)
 }

 updateQuiz(){
  console.log("clicked")
  if(this.quizData.title.trim()==''||this.quizData.title==null){
    this.snackbar.open('title is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
  if(this.quizData.maxMarks.trim()==''||this.quizData.maxMarks==null){
    this.snackbar.open('maxMarks is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
  if(this.quizData.numberOfQuestion.trim()==''||this.quizData.numberOfQuestion==null){
    this.snackbar.open('Number Of Question is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
  if(this.quizData.category==null){
    this.snackbar.open('Category is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }

  this._quiz.updateQuiz(this.quizData).subscribe(
    (data)=>{
       console.log(data)
       Swal.fire("successfull updated!!","your category successfully updated into category list","success")
       
    },
    (error:any)=>{
      console.log(error)
      Swal.fire("Error!!","something went wrong!!","error")
    }
   );

}


}
