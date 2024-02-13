import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = {
    usernameOrEmail: '',
    password: '',
  };
  Router: any;
  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { }
  ngOnInit(): void {
  }
  formSubmit() {
    console.log("login btn clicked");
    if (this.loginData.usernameOrEmail.trim() == '' || this.loginData.usernameOrEmail == null) {
      this.snack.open("username is required!!.......", 'close', {
        duration: 3000,
      });
      return;
    }
    if (this.loginData.password.trim() == '' || this.loginData.password == null) {
      this.snack.open("password is required!!.......", 'close', {
        duration: 3000,
      });
      return;
    }
    //request to server to generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
      console.log(data);
      this.login.loginUser(data.accessToken)
      this.snack.open("login successfuly",'close');
      this.navigateToHomePage();
    },
      (error:any) => {
        console.log(error);
        this.snack.open("something is wrong",'close');
      });
  }
  navigateToHomePage() {
    this.router.navigate([""]);
  }
}

