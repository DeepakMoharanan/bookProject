import { Component, OnInit } from '@angular/core';
import { AddbookService } from 'src/app/services/addbook.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public book = {
    name: '',
    author: '',
    publishedYear: ''
  };

  constructor(private snack: MatSnackBar,private service: AddbookService) { }
  
  ngOnInit(): void { }

  onSubmit() {
    // Check if the book name is empty or null
    if (!this.book.name) {
      this.snack.open('Please Enter The Book Name', 'close',{duration: 3000});
      return;
    }
    // Check if the author name is empty or null
    if (!this.book.author) {
    this.snack.open('Please Enter The Author Name', 'close',{duration: 3000});
      return;
    }
    // Check if the publishedYear is empty or null
    if (!this.book.publishedYear) {
    this.snack.open('Please Enter The PublishedYear', 'close',{duration: 3000});
      return;
    }

    // Add books
    this.service.addBook([this.book]).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Book added successfully', 'close',{duration: 3000});
      },
      (error: any) => {
        console.log(error);
        this.snack.open('Something went wrong while adding the book', 'close',{duration: 3000});
      }
    );
  }
}
