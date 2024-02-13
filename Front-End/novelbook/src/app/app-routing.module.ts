import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateBookComponent } from './pages/update-book/update-book.component';
import { ViweBooksComponent } from './pages/viwe-books/viwe-books.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { MultipleBookComponent } from './pages/multiple-books/multiple-book.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"add-book",
    component:AddBookComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"update-book",
    component:UpdateBookComponent,
    pathMatch:"full"
  }
  ,
  {
    path:"viwe-book",
    component:ViweBooksComponent,
    pathMatch:"full"
  },
  {
    path:"books",
    component:MultipleBookComponent,
    pathMatch:"full"
  },
  {
    path:"add-book/books",
    component:MultipleBookComponent,
    pathMatch:"full"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
