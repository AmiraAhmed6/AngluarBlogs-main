import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  base:String="http://localhost:9000/user/"
  constructor(private http:HttpClient) { }
  token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFtciIsImlkIjoiNjAxNmM5OGJlZjU2ZTEyZjNjZjMyM2I1IiwiaWF0IjoxNjEyNDMyNDExLCJleHAiOjE2MTI1MTg4MTF9.6INMzTqGZNvBNg2AmB0dr-c_plYz7eVD_Odjm6aXq-Y";
     httpOptions={ headers:new HttpHeaders({
       'Authorization':this.token,
     
    })}


  // user profile
  GetUserProfile(){
    return this.http.get<any>(`${this.base}profile`,this.httpOptions); 
  }
  //register
  CreateUser(user:User){
    return this.http.post<User>(`${this.base}register`,User);
  }
  //Login
  Login(user:User){
    return this.http.post<User>(`${this.base}register`,User);
  }


}
