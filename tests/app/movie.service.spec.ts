/// <reference types="jest" />
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from '../../src/app/movie.service';

describe('MovieService', () => {
  let service: MovieService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MovieService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('deve buscar filmes com parâmetros', () => {
    service.getMovies(1, 5, 2020, true).subscribe();

    const req = http.expectOne(r => r.url.includes('api/movies'));
    expect(req.request.params.get('page')).toBe('1');
    expect(req.request.params.get('size')).toBe('5');
    expect(req.request.params.get('year')).toBe('2020');
    expect(req.request.params.get('winner')).toBe('true');
  });

  it('deve listar anos com múltiplos vencedores', () => {
    const mock = { years: [] };
    service.getYearsWithMultipleWinners().subscribe();

    const req = http.expectOne(r => r.url.includes('yearsWithMultipleWinners'));
    req.flush(mock);
  });

  it('deve listar os principais estúdios', () => {
    const mock = { studios: [] };
    service.getTopStudios().subscribe();

    const req = http.expectOne(r => r.url.includes('studiosWithWinCount'));
    req.flush(mock);
  });

  it('deve retornar intervalos de produtores', () => {
    const mock = { min: [], max: [] };
    service.getProducerIntervals().subscribe();

    const req = http.expectOne(r => r.url.includes('maxMinWinIntervalForProducers'));
    req.flush(mock);
  });

  it('deve buscar vencedores por ano', () => {
    service.getWinnersByYear(1984).subscribe();
    const req = http.expectOne(r => r.url.includes('winnersByYear'));
    expect(req.request.urlWithParams).toContain('year=1984');
  });
});
