import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { GetUserComponent } from './get-user/get-user.component';
import { PostUserComponent } from './post-user/post-user.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent,
    HomeComponent,
    CreateBookComponent,
    DeleteBookComponent,
    UpdateBookComponent,
    GetUserComponent,
    PostUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'GetBook',component:BookComponent},
      {path:'home',component:HomeComponent},
      {path:'create',component:CreateBookComponent},
      {path:'delete',component:DeleteBookComponent},
      {path:'update',component:UpdateBookComponent},
      {path:'',redirectTo:'/home' , pathMatch:'full'},
      {path:'getuser',component:GetUserComponent},
      {path:'addUser',component:PostUserComponent},
      {path:'UpdateUser',component:UpdateBookComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
