import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  page = 0;
  size = 15;
  totalPages = 1;
  totalItems = 0;
  sizeOptions = [5, 10, 15, 20];
  year?: number;
  winner?: boolean;
  pageNumbers: number[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.movieService.getMovies(this.page, this.size, this.year, this.winner).subscribe(res => {
      this.movies = res.content;
      this.totalPages = res.totalPages;
      this.totalItems = res.totalElements ?? res.totalItems ?? 0;
      this.updatePageNumbers();
    });
  }

  onFilterChange() {
    this.page = 0;
    this.load();
  }

  onSizeChange() {
    this.page = 0;
    this.load();
  }

  goToPage(page: number) {
    if (page >= 0 && page < this.totalPages) {
      this.page = page;
      this.load();
    }
  }

  updatePageNumbers() {
    this.pageNumbers = [];
    for (let i = 0; i < this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }
}
