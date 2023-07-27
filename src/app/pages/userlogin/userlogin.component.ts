import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';
import { window } from 'rxjs';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }
  LoginData = {
    userName: '',
    password: ''
  }


  loginSubmit() {
    console.log("hello btn  is clicked !!")
    if (this.LoginData.userName.trim() == '' || this.LoginData.userName == null) {
      this.snack.open('userName is requried !!', 'ok', {
        duration: 3000,
      })
    };

    if (this.LoginData.password.trim() == '' || this.LoginData.password == null) {
      this.snack.open('password is requried !!', 'ok', {
        duration: 3000,
      })
    };

    this.login.generateToken(this.LoginData).subscribe(
      (data: any) => {
        console.log(data);

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user: any) => {
            this.login.setUser(user)
            console.log(user)

            if (this.login.getUserRole() == 'ADMIN') {
              // redirect to Admin dashboard
  
              this.router.navigate(['/admin']);
              this.login.loginStatus.next(true);
            } else if (this.login.getUserRole() == 'NORMAL') {

              // redireact to Normal dashboard
            
              this.router.navigate(['/user']);
              this.login.loginStatus.next(true);

            } else {
              this.login.logout();
               
            }


          },
          (error: any) => {
            console.log(error)
            this.snack.open("invalid details  please enter valid username and password !!", 'ok'
              , {
                duration: 3000
              })
          }
        )
      },
      (error: any) => {
        console.log(error);
        this.snack.open("invalid details  please enter valid username and password !!", 'ok'
              , {
                duration: 3000
              })
      }
    );
  }
}

