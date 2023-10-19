import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {
  constructor(private us:UserServiceService){}
  posts:any;
  getPosts(){
    return this.us.getPosts().subscribe(
      (response)=>{this.posts=response}
    )
  }

}
