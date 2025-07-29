import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService, YearWins, StudioWins, ProducerInterval, Movie } from '../movie.service';

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
    req.flush({ content: [], totalPages: 1 });
  });

  it('deve listar anos com múltiplos vencedores', () => {
    const mock: YearWins[] = [];
    service.getYearsWithMultipleWinners().subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = http.expectOne(r => r.url.includes('yearsWithMultipleWinners'));
    req.flush({ years: mock });
  });

  it('deve listar os principais estúdios', () => {
    const mock: StudioWins[] = [];
    service.getTopStudios().subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = http.expectOne(r => r.url.includes('studiosWithWinCount'));
    req.flush({ studios: mock });
  });

  it('deve retornar intervalos de produtores', () => {
    const mock = { min: [], max: [] };
    service.getProducerIntervals().subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = http.expectOne(r => r.url.includes('maxMinWinIntervalForProducers'));
    req.flush(mock);
  });

  it('deve buscar vencedores por ano', () => {
    const mock: Movie[] = [];
    service.getWinnersByYear(1984).subscribe(res => {
      expect(res).toEqual(mock);
    });
    const req = http.expectOne(r => r.url.includes('winnersByYear'));
    expect(req.request.urlWithParams).toContain('year=1984');
    req.flush(mock);
  });
});
