import { Component } from '@angular/core';
import { book } from 'book';
import { user } from 'user';
import { BookServiceService } from '../book-service.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(private Bookservice: BookServiceService){}

  posts:any;

  getPosts(){
    return this.Bookservice.getPosts().subscribe(
      (response)=>{this.posts=response}
    );
  }
}
