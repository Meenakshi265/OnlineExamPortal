import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './hepl';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  // get all categories
  public getCategories(){
 return this.http.get(`${baseurl}category/`);
  }


  //add new category
  public addCategory(category:any){
    return this.http.post(`${baseurl}category/`,category);
  }


  // delete category
  public deleteCategory(){
    this.http.delete(`${baseurl}category/`)
  }


}
