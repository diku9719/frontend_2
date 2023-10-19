import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { book } from 'book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})

export class CreateBookComponent {
  constructor(private bookService:BookServiceService){}

  
  model=new book(41,'DBMS', 'abc', {id(Id){},name:'abc'});

  post1(){
    this.bookService.post1(this.model).subscribe(
      (response)=>{console.log(response)}
    );
}
}
