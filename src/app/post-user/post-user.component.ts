import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { user } from 'user';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent {
  constructor(private us:UserServiceService){}
  model=new user('name');
  post1(){
    return this.us.post1(this.model).subscribe(
      (response)=>{console.log(response)}
    )
  }
}
