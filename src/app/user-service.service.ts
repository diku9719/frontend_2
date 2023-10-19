import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8084/api/users";
  getPosts(){
    return this.http.get(this.url);
  }
  post1(obj:user){
    var headers=new HttpHeaders({'Content-Type':'application/json'})
    return this.http.post(this.url,obj,{headers});
  }
}
