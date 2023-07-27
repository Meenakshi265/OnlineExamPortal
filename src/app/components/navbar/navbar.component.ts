import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn=false
  user1=null
 constructor(public login:LoginService,private router:Router){}

 ngOnInit(){
  this.isLoggedIn=this.login.isLoggedIn();
  this.user1=this.login.getUser();
  this.login.loginStatus.asObservable().subscribe((data)=>{
    this.isLoggedIn=this.login.isLoggedIn();
    this.user1=this.login.getUser();
    console.log(data)
  })
 }
 logout2(){
  console.log(" logged out.................1111111111")
  this.login.logout();
  this.router.navigate(['/'])
  this.login.loginStatus.next(false)
  
 
 }
}
