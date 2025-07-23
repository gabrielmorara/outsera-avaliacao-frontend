/// <reference types="jest" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DashboardComponent } from '../../../src/app/dashboard/dashboard.component';
import { MovieService, ProducerInterval, StudioWins, YearWins, Movie } from '../../../src/app/movie.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let serviceSpy: jest.Mocked<MovieService>;

  beforeEach(async () => {
 serviceSpy = {
      getMovies: jest.fn(),
      getYearsWithMultipleWinners: jest.fn(),
      getTopStudios: jest.fn(),
      getProducerIntervals: jest.fn(),
      getWinnersByYear: jest.fn()
    } as unknown as jest.Mocked<MovieService>;

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: MovieService, useValue: serviceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('deve carregar dados ao iniciar', () => {
    const years: YearWins[] = [{ year: 2000, winnerCount: 2 }];
    const studios: StudioWins[] = [
      { name: 'A', winCount: 4 },
      { name: 'B', winCount: 3 },
      { name: 'C', winCount: 2 },
      { name: 'D', winCount: 1 }
    ];
    const intervals = {
      min: [{ producer: 'X', interval: 1, previousWin: 1990, followingWin: 1991 }],
      max: [{ producer: 'Y', interval: 10, previousWin: 1980, followingWin: 1990 }]
    };

    serviceSpy.getYearsWithMultipleWinners.mockReturnValue(of(years));
    serviceSpy.getTopStudios.mockReturnValue(of(studios));
    serviceSpy.getProducerIntervals.mockReturnValue(of(intervals));

    fixture.detectChanges();

    expect(component.yearsWithMultipleWinners).toEqual(years);
    expect(component.topStudios).toEqual(studios.slice(0, 3));
    expect(component.minInterval).toEqual(intervals.min[0]);
    expect(component.maxInterval).toEqual(intervals.max[0]);
  });

  it('deve buscar vencedores por ano válido', () => {
    const winners: Movie[] = [
      { id: 1, year: 2000, title: 't', studios: [], producers: [], winner: true }
    ];
    serviceSpy.getWinnersByYear.mockReturnValue(of(winners));

    component.fetchWinners('2000');

    expect(serviceSpy.getWinnersByYear).toHaveBeenCalledWith(2000);
    expect(component.winnersByYear).toEqual(winners);
  });

  it('deve limpar lista para ano inválido', () => {
    component.fetchWinners('x');
    expect(serviceSpy.getWinnersByYear).not.toHaveBeenCalled();
    expect(component.winnersByYear).toEqual([]);
  });
});
