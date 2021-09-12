import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Movie2} from 'src/app/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http: HttpClient) { }
  readonly GetMoviesAPi = environment.GetMoviesDetials;

  GetMovies():Observable<Movie2[]>
  {
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.get<Movie2[]>(this.GetMoviesAPi,httpOptions);
  }


}
