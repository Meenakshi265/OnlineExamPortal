import { Component } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {

  constructor(private category:CategoryService,){}


 

  categories=[
    {
    cid:   1,
    title:"",
    description:"jnkjandkjsndkjsdkjjhdjks"
  },
 
  ]
  ngOnInit():void{
   this.category.getCategories().subscribe(
      (data:any)=>{
        this.categories=data;
        console.log(data)
        // Swal.fire("Success!!","successfully data is loaded!!","success")
      },
      (error:any)=>{
           console.log(error)
           Swal.fire("Error!!","error in loading data from server!!","error")
      }
    )

  }

}
