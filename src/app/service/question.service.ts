import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './hepl';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }
// get quetion related to quiz
  public getQuetion(qId:any){
    return this._http.get(`${baseurl}question/quiz/all/${qId}`)
  }

  // get quetion by question Id
  public getQuetionById(qId:any){
    return this._http.get(`${baseurl}question/${qId}`)
  }



  // add quetion related to quiz
  public addQuetion(question:any){
    return this._http.post(`${baseurl}question/`,question)
  }

   // delete quetion related to quiz
   public deleteQuetion(quesId:any){
    return this._http.delete(`${baseurl}question/${quesId}`)
  }

   // update quetion related to quiz
   public updateQuetion(questionData:any){
    return this._http.put(`${baseurl}question/`,questionData)
  }
}
