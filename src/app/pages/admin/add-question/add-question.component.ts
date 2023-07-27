import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {
 constructor(private _route:ActivatedRoute,private question:QuestionService,private snackbar:MatSnackBar){}
qId=0;
qTitle=""
public Editor=ClassicEditor;
questionData=
  {
      "quesId": null,
      "content": "",
      "option1": "",
      "option2": " ",
      "option3": "",
      "option4": "",
      "answer": " ",
      "quiz": {
          "qid": 0
        
      }
  }

 ngOnInit():void{

  this.qId= this._route.snapshot.params['qid'];
  this.qTitle=this._route.snapshot.params['title']

this.questionData.quiz['qid']=this.qId;


 

}
submitForm(){


  console.log("clicked")

  if(this.questionData.content.trim()==''||this.questionData.content==null){
    this.snackbar.open('question  is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }

  if(this.questionData.option1.trim()==''||this.questionData.option1==null){
    this.snackbar.open('option1  is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
  if(this.questionData.option2.trim()==''||this.questionData.option2==null){
    this.snackbar.open('option2  is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
  if(this.questionData.answer.trim()==''||this.questionData.answer==null){
    this.snackbar.open('answer  is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }


  this.question.addQuetion(this.questionData).subscribe(
    (data)=>{
         this.questionData.content=""
         this.questionData.option1=""
         this.questionData.option2=""
         this.questionData.option3=""
         this.questionData.option4=""
         this.questionData.answer=""

      Swal.fire("successfull add!!","your category successfully added into category list","success")
    },
    (error)=>{
        Swal.fire("Error!!","something went wrong!!","error")
    }
  )

}
}
