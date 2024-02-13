import { Component, OnInit } from '@angular/core';
import { MultipleBookService } from 'src/app/services/multiple-book.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-book',
  templateUrl: './multiple-book.component.html',
  styleUrls: ['./multiple-book.component.css']
})
export class MultipleBookComponent implements OnInit {

  form: FormGroup;

  constructor(private service: MultipleBookService, private fb: FormBuilder) {
    this.form = this.fb.group({
      books: this.fb.array([]),
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.form.invalid) {
      alert('Please fill in all book details');
      return;
    }

    const books = this.form.value.books;
    this.service.addBooks(books).subscribe(
      (data: any) => {
        console.log(data);
        alert('Books added successfully');
      },
      (error: any) => {
        console.log(error);
        alert('Something went wrong while adding the books');
      }
    );
  }

  addBook() {
    const books = this.form.get('books') as FormArray;
    books.push(this.fb.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      publishedYear: ['', Validators.required],
    }));
  }

  getBooksControls() {
    return (this.form.get('books') as FormArray).controls;
  }
}
