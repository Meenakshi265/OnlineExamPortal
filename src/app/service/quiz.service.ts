import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './hepl';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getQuiz(){
    return this.http.get(`${baseurl}quiz/`)
  }

  
  public addQuiz(quizData:any){
    return this.http.post(`${baseurl}quiz/`,quizData)
  }
  
  public deleteQuiz1(qid:any){
    console.log(`${baseurl}/quiz/${qid}`)
   return  this.http.delete(`${baseurl}quiz/${qid}`)
  }

  // get quiz by quiz id
  public getSingleQuiz(qid:any){
   return  this.http.get(`${baseurl}quiz/${qid}`)
  }
// update quiz
   public updateQuiz(quizdata:any){
   return  this.http.put(`${baseurl}quiz/`,quizdata)
  }
}
