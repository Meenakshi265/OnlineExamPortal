import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import { QuizService } from 'src/app/service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent {
constructor(private category:CategoryService,private snackbar:MatSnackBar ,private _quiz:QuizService){}

categories=[{
    cid:1,
    title:"Programing quzi",
    description:""
  }]

 
quizzes=
  {
   
    title:" ",
    discrption:"",
    maxMarks:"",
    numberOfQuestion:"",
    category:{
      cid:''
    },
    active:"false"
  }
  
 

ngOnInit():void{
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


addQuiz(){
    console.log("clicked")
    if(this.quizzes.title.trim()==''||this.quizzes.title==null){
      this.snackbar.open('title is requried !!', 'ok', {
        duration: 3000,
      })
   return ;
    }
    if(this.quizzes.maxMarks.trim()==''||this.quizzes.maxMarks==null){
      this.snackbar.open('maxMarks is requried !!', 'ok', {
        duration: 3000,
      })
   return ;
    }
    if(this.quizzes.numberOfQuestion.trim()==''||this.quizzes.numberOfQuestion==null){
      this.snackbar.open('Number Of Question is requried !!', 'ok', {
        duration: 3000,
      })
   return ;
    }
    if(this.quizzes.category==null){
      this.snackbar.open('Category is requried !!', 'ok', {
        duration: 3000,
      })
   return ;
    }

    this._quiz.addQuiz(this.quizzes).subscribe(
      (data)=>{
         console.log(data)
         this.quizzes.title=''
         this.quizzes.discrption=""
         this.quizzes.maxMarks=""
         this.quizzes.numberOfQuestion=""
         this.quizzes.category.cid=''
         Swal.fire("successfull add!!","your category successfully added into category list","success")
      },
      (error:any)=>{
        Swal.fire("Error!!","something went wrong!!","error")
      }
     );

}




}
