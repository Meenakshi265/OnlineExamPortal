import {  
    HttpRequest,  
    HttpHandler,  
    HttpEvent,  
    HttpInterceptor,  
    HTTP_INTERCEPTORS
  } from '@angular/common/http';  
  import { LoginService } from "./login.service"
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

 @Injectable()
  export class AuthInterceptor implements HttpInterceptor { 
     constructor(public login: LoginService) {} 
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          // add the jwt toke to the header
        let authreq=req;
         const token =this.login.getToken();
         console.log("inside interpet .................."+token)
         if(token!=null){
            authreq=authreq.clone({
                setHeaders:{Authorization:`Bearer ${token}`},

            })
                 
            console.log("inside  if block   in interpet function...")
         }
            return  next.handle(authreq);
  }   
  }  


  export const AuthInterceptorProvider = [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ];