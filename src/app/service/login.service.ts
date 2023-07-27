import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl  from './hepl';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


     public loginStatus= new Subject<boolean>
  constructor(private http:HttpClient) { }


  //generate token
 public generateToken(LoginData:any){

  return this.http.post(`${baseurl}token`,LoginData)

  
 }


 // loginuser --> set the toke in local storage
 public loginUser(token: any) {
  localStorage.setItem("token", token);
 
  return true;
}


// islogin --> check wether a user is login or not 
public isLoggedIn(){
  let tokenStr=localStorage.getItem("token");
  if(tokenStr==undefined||tokenStr==''|| tokenStr==null){
    return false;
  }
  else 
  return true;

}

// logout --> remove token from local storage...........
public logout(){
  console.log("logout..........................................")
  localStorage.removeItem("token");
  localStorage.removeItem("user")
  return true;
}

 // getToken--> to get the token from the local storage ;;;
 public getToken(){
  return localStorage.getItem("token")
 }

 public setUser(user:any){
  localStorage.setItem("user",JSON.stringify(user));
 }
 public  getUser(){
   let userStr=localStorage.getItem("user");
   if(userStr!=null){


     return JSON.parse(userStr);

   }else
   {
    this.logout();
    return null;
   }
 }

 public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;

 }

 public getCurrentUser(){
   return this.http.get(`${baseurl}current-user`)
 }
}
