import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor( private  userService:UserService,private  snackBar: MatSnackBar){}

  public user={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };

  Registerform(){
   
    console.log(this.user)
    
    if(this.user.userName==""|| this.user.userName==null){
     this.snackBar.open("user name is requred!!",'ok',{duration:3000})
     return;
    }
   
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        // success
        console.log(data)
        Swal.fire("success!" ,"user is register successfully " + data.firstName,'success')
      },
      (error)=>{
           //error
           console.log(error)
           Swal.fire("something went worng!" ,"user not register",'error')
      }
    );


    
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
