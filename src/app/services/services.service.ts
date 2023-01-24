import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { service } from '../models/service.module';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  url = 'services';
  constructor(private http: HttpClient) {}
  //Obtenir Tous Les Services
  public getServices(): Observable<service[]> {
    return this.http.get<service[]>(`${environment.apiUrl}/${this.url}`);
  }
  //Modifier Une Service
  public updateService(service: service): Observable<service[]> {
    return this.http.put<service[]>(
      `${environment.apiUrl}/${this.url}/${service.serviceId}`,
      service
    );
  }
  //Supprimer Une Service
  public deleteEmployee(service: service): Observable<service[]> {
    return this.http.delete<service[]>(
      `${environment.apiUrl}/${this.url}/${service.serviceId}`
    );
  }
  //Cree Une Service
  public createEmployee(service: service): Observable<service[]> {
    return this.http.post<service[]>(
      `${environment.apiUrl}/${this.url}`,
      service
    );
  }
}
