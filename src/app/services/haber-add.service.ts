import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { HaberList } from '../haber-list/haber-list';

@Injectable({
  providedIn: 'root'
})
export class HaberAddService {
  api:string = "http://localhost:3000/data";


  constructor(private http:HttpClient) { }
  addHaber(haber: HaberList):Observable <HaberList>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token',

      })
    } 
  return this.http.post<HaberList>(this.api, haber, httpOptions).pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
   )
}
  handleError(err: HttpErrorResponse){
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message
    }else {
      errorMessage = "Sistemsel Bir hata";
    }
    return  throwError(errorMessage);
  }

}
