import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { book } from 'book';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  constructor(private bookservice:BookServiceService){}
  model=new book(21,'title', 'author', {id(Id){},name:'abc'});
  id:any;

  delete(){

    this.bookservice.delete(this.id).subscribe(
      (response)=>{console.log(response)}
    );
    //console.log(this.id);
  }
}
