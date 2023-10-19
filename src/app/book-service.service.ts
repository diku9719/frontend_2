import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from 'book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) {}
  private url="http://localhost:8084/api/books";
  getPosts(){
    return this.http.get(this.url);
  }
  post1(obj:book){
    const configUrl= "http://localhost:8084/api/books";
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(configUrl,obj,{headers});
  }
  delete(id:any){
    const configUrl= "http://localhost:8084/api/books/";
    return this.http.delete(configUrl+id);
    
  }
  private url1="http://localhost:8084/api/books/update"
  Update(obj:book){
    const configUrl=`${this.url1}/${obj.id1}`;
    var headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(configUrl,obj,{headers});
  }

}
