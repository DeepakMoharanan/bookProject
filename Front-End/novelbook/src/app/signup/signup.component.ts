import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snack: MatSnackBar, private service: ServiceService, private router: Router) { }

  public user = {
    name: '',
    username: '',
    email: '',
    password: ''
  }

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user);
    if (this.user.name == '' || this.user.name == null) {
      this.snack.open('user name not fill !!......', 'Close')
      return;
    }
    {
      console.log(this.user);
      if (this.user.username == '' || this.user.username == null) {
        this.snack.open('user name not fill !!......', 'Close')
        return;
      }
      if (this.user.email == '' || this.user.email == null) {
        this.snack.open('user email not fill !!......', 'Close')
        return;
      }
      if (this.user.name == '' || this.user.name == null) {
        this.snack.open('name not fill !!......', 'Close')
        return;
      }
      if (this.user.password == '' || this.user.password == null) {
        this.snack.open('password not fill !!......', 'Close')
        return;
      }

      //adduser:
      this.service.adduser(this.user).subscribe(
        (data: any) => {
          // Success
          console.log(data);
          this.snack.open("Signup successful", 'Close');
          this.navigateToHomePage();
        },
        (error: any) => {
          console.log(error);
          if (error.status === 409) {
            this.snack.open("User already exists. Please choose a different username or email", 'Close');
          } else {
            this.snack.open("Something went wrong. Please try again later", 'Close');
          }
        }
      );
    }
  }
  navigateToHomePage() {
    this.router.navigate([""]);
  }
}
