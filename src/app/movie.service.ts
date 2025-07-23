import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from '../environments/environment';

const API = environment.apiUrl;

export interface Movie {
  id: number;
  year: number;
  title: string;
  studios: string[];
  producers: string[];
  winner: boolean;
}

export interface YearWins { year: number; winnerCount: number; }
export interface StudioWins { name: string; winCount: number; }
export interface ProducerInterval { producer: string; interval: number; previousWin: number; followingWin: number; }

@Injectable({ providedIn: 'root' })
export class MovieService {
  constructor(private http: HttpClient) {}

  private handleError(operation: string) {
    return (error: any) => {
      console.error(`${operation} failed:`, error);
      return throwError(() => error);
    };
  }

  getMovies(page = 0, size = 10, year?: number, winner?: boolean): Observable<any> {
    const params: any = { page, size };
    if (year !== undefined) params.year = year;
    if (winner !== undefined) params.winner = winner;
    return this.http.get<any>(API, { params }).pipe(
      catchError(this.handleError('getMovies'))
    );
  }

  getYearsWithMultipleWinners(): Observable<YearWins[]> {
    return this.http.get<{ years: YearWins[] }>(`${API}/yearsWithMultipleWinners`)
      .pipe(
        map(res => res.years),
        catchError(this.handleError('getYearsWithMultipleWinners'))
      );
  }

  getTopStudios(): Observable<StudioWins[]> {
    return this.http.get<{ studios: StudioWins[] }>(`${API}/studiosWithWinCount`)
      .pipe(
        map(res => res.studios),
        catchError(this.handleError('getTopStudios'))
      );
  }

  getProducerIntervals(): Observable<{ min: ProducerInterval[]; max: ProducerInterval[] }> {
    return this.http.get<{ min: ProducerInterval[]; max: ProducerInterval[] }>(`${API}/maxMinWinIntervalForProducers`)
      .pipe(catchError(this.handleError('getProducerIntervals')));
  }

  getWinnersByYear(year: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${API}/winnersByYear?year=${year}`)
      .pipe(catchError(this.handleError('getWinnersByYear')));
  }
}
