import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
 constructor(private category:CategoryService,private sankbar:MatSnackBar){}

 categporyDetails=
  {
    title:"",
    description:""
  }
 

 addCategory(){
  console.log("helloo..............")
  console.log(this.categporyDetails)


  if(this.categporyDetails.title.trim()==''||this.categporyDetails.title==null){
    this.sankbar.open('title is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }

  if(this.categporyDetails.description.trim()==''||this.categporyDetails.description==null){
    this.sankbar.open('description is requried !!', 'ok', {
      duration: 3000,
    })
 return ;
  }
   this.category.addCategory(this.categporyDetails).subscribe(
    (data)=>{
       console.log(data)
       this.categporyDetails.title=''
       this.categporyDetails.description=''
       Swal.fire("successfull add!!","your category successfully added into category list","success")
    },
    (error:any)=>{
      Swal.fire("Error!!","something went wrong!!","error")
    }
   );

 }
}
