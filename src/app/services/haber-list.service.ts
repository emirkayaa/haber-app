import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HaberList } from '../haber-list/haber-list';

@Injectable({
  providedIn: 'root',
})
export class HaberListService {
  private apiUrl = 'https://newsapi.org/v2/top-headlines';
  private apiKey = '8dc5040e74934888b1d9c6a0467cef33';

  constructor(private http: HttpClient) {}

  getData(category?: string, page?: number): Observable<HaberList> {
    if (category == undefined || category == null) {
      category = '';
    }

    let params = new HttpParams()
      .set('country', 'tr')  // Eğer country sabit ise burada tanımlanabilir
      .set('apiKey', this.apiKey)
      .set('category', category)
      .set('page', page?.toString() || '')

    return this.http.get<HaberList>(this.apiUrl, { params }).pipe(
      tap((data) => this.handleSuccess(data)),
      catchError(this.handleError)
    );
  }

  private handleSuccess(data: HaberList): void {
  console.log('tebrik');
  }

  private handleError(error: any): Observable<never> {
    console.error('Hata oluştu:', error);
    return new Observable<never>();
  }
}