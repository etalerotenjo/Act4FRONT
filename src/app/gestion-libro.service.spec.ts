import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GestionLibroService } from './gestion-libro.service';
import { HttpClient } from '@angular/common/http';

describe('GestionLibroService', () => {
  let service: GestionLibroService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]});
     // Inject the http service and test controller for each test
    service = TestBed.inject(GestionLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
