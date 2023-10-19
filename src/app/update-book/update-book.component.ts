import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { book } from 'book';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  constructor(private bs:BookServiceService){}
  model=new book(21,'title', 'author', {id(Id){},name:'abc'});
  Update(){
    return this.bs.Update(this.model).subscribe(
      (response)=>{console.log(response)});
  }

}
