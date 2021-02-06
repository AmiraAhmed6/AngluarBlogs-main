import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  base:String="http://localhost:9000/blog/"
  constructor(private http:HttpClient) { }
  token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtciIsImlkIjoiNjAxNmM5OGJlZjU2ZTEyZjNjZjMyM2I1IiwiaWF0IjoxNjEyNDMyNDExLCJleHAiOjE2MTI1MTg4MTF9.6INMzTqGZNvBNg2AmB0dr-c_plYz7eVD_Odjm6aXq-Y";
     httpOptions={ headers:new HttpHeaders({
       'Authorization':this.token,
    })}
    
    

  // get blog by id
  getBlog(id:String){
    return this.http.get<Blog>(`${this.base}/${id}`); 
  }

  // add blog

  addBlog(blog:FormData){
    return this.http.post<Blog>(`${this.base}add`,blog,this.httpOptions); 
  }

}


