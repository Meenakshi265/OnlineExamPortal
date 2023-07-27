import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import Swal from 'sweetalert2';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {

 constructor(private _question:QuestionService,private _route:ActivatedRoute){}

qId=0;
qTitle=""
 public Editor=ClassicEditor
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
    this.qId= this._route.snapshot.params['quesId'];
    
    console.log(this.qId)
    this._question.getQuetionById(this.qId).subscribe(
      (data:any)=>{
       this.questionData=data
       console.log(this.questionData)

      },
      (error)=>{
          console.log(error)
      }
    )
    
     }


  updateQuestion(){
   
    console.log("clicked..")
    this._question.updateQuetion(this.questionData).subscribe(

      (data)=>{
        console.log(data)
        Swal.fire("successfull updated!!","your category successfully updated into category list","success")
         

      },
      (error)=>{
        console.log(error)
        Swal.fire("Error!!","something went wrong!!","error")
      }
    )
  }
}
