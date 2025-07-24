import { Component, OnInit } from '@angular/core';
import {
  MovieService,
  ProducerInterval,
  StudioWins,
  YearWins,
  Movie,
} from '../movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  yearsWithMultipleWinners: YearWins[] = [];
  topStudios: StudioWins[] = [];
  maxInterval: ProducerInterval | null = null;
  minInterval: ProducerInterval | null = null;
  winnersByYear: Movie[] = [];
  lastSearchedYear: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService
      .getYearsWithMultipleWinners()
      .subscribe((years: YearWins[]) => {
        this.yearsWithMultipleWinners = years;
      });

    this.movieService.getTopStudios().subscribe((studios: StudioWins[]) => {
      this.topStudios = studios.slice(0, 3);
    });

    this.movieService.getProducerIntervals().subscribe((intervals) => {
      this.minInterval = intervals.min[0] || null;
      this.maxInterval = intervals.max[0] || null;
    });
  }

  fetchWinners(year: string) {
    const y = parseInt(year, 10);
    if (!isNaN(y)) {
      this.movieService.getWinnersByYear(y).subscribe((winners: Movie[]) => {
        this.winnersByYear = winners;
        this.lastSearchedYear = y;
      });
    } else {
      this.winnersByYear = [];
      this.lastSearchedYear = null;
    }
  }
}
