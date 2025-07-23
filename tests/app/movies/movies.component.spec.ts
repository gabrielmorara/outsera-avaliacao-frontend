/// <reference types="jest" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { MoviesComponent } from '../../../src/app/movies/movies.component';
import { MovieService, Movie } from '../../../src/app/movie.service';


describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;
  let serviceSpy: jest.Mocked<MovieService>;

  beforeEach(async () => {
    serviceSpy = {
      getMovies: jest.fn()
    } as unknown as jest.Mocked<MovieService>;

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [MoviesComponent],
      providers: [{ provide: MovieService, useValue: serviceSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
  });

  it('deve carregar filmes ao iniciar', () => {
    const mock = { content: [{ id: 1, year: 2000, title: 't', studios: [], producers: [], winner: true } as Movie], totalPages: 1 };
    serviceSpy.getMovies.mockReturnValue(of(mock));

    fixture.detectChanges();

    expect(serviceSpy.getMovies).toHaveBeenCalled();
    expect(component.movies.length).toBe(1);
    expect(component.pageNumbers).toEqual([0]);
  });

  it('deve atualizar filtros', () => {
    serviceSpy.getMovies.mockReturnValue(of({ content: [], totalPages: 1 }));
    component.page = 2;
    component.onFilterChange();
    expect(component.page).toBe(0);
    expect(serviceSpy.getMovies).toHaveBeenCalled();
  });

  it('deve mudar de página quando válida', () => {
    serviceSpy.getMovies.mockReturnValue(of({ content: [], totalPages: 3 }));
    component.totalPages = 3;
    component.goToPage(2);
    expect(component.page).toBe(2);
  });

  it('não deve mudar para página inválida', () => {
    (serviceSpy.getMovies as jest.Mock).mockClear();
    component.totalPages = 2;
    component.goToPage(3);
    expect(component.page).toBe(0);
    expect(serviceSpy.getMovies).not.toHaveBeenCalled();
  });
});
