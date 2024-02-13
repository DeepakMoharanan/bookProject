import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ViweBookService } from 'src/app/services/viwe-book.service';

@Component({
  selector: 'app-viwe-books',
  templateUrl: './viwe-books.component.html',
  styleUrls: ['./viwe-books.component.css']
})
export class ViweBooksComponent implements OnInit {
  books: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'author', 'publishedYear']; 
  totalItems: number = 0;
  pageIndex: number = 0;
  pageSize: number = 10;
  selectedFilter: string = 'id'; 
  keyword: string = '';
  router: any;

  constructor(private viweBookService: ViweBookService) {}

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks() {
    this.viweBookService.getBooks(this.pageIndex, this.pageSize, this.selectedFilter, this.keyword)
      .subscribe(data => {
        this.books = data.content;
        this.totalItems = data.totalElements;
      });
  }
  
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.fetchBooks();
  }
  
}
