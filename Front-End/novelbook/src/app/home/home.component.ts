import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  ngOnInit(): void {
  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.snack.open("Logout successful", 'Close', {
      duration: 2000
    });
    return true;
  }

}
