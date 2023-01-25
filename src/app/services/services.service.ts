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
  //Obtenir Le Nombre De Services
  public getNombreServices(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/${this.url}`);
  }
  //Modifier Une Service
  public updateService(service: service): Observable<service[]> {
    return this.http.put<service[]>(
      `${environment.apiUrl}/${this.url}/${service.serviceId}`,
      service
    );
  }
  //Supprimer Une Service
  public deleteService(service: service) {
    return this.http.delete<service[]>(
      `${environment.apiUrl}/${this.url}/${service.serviceId}`
    );
  }

  //Cree Une Service
  public createService(service: service): Observable<service[]> {
    return this.http.post<service[]>(
      `${environment.apiUrl}/${this.url}`,
      service
    );
  }
  //Obtenir Les Services Avec Filter
  public getCustomServices(customFilter: object): Observable<service[]> {
    return this.http.get<service[]>(
      `${environment.apiUrl}/${this.url}/filter/${JSON.stringify(customFilter)}`
    );
  }
}
