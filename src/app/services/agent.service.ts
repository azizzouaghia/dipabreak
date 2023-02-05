import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { agent } from '../models/agent.module';
import { AgentResponse } from '../models/response.module';


@Injectable({
  providedIn: 'root',
})
export class AgentService {
  url = 'agents';
  constructor(private http: HttpClient) {}

  //Modifier Un Agent
  public updateAgent(agent: agent): Observable<agent[]> {
    return this.http.put<agent[]>(
      `${environment.apiUrl}/${this.url}/${agent.agentId}`,
      agent
    );
  }

  //Ajouter Une Service A Un Agent
  public addServiceToAgent(agentId: any, serviceId: string) : Observable<agent[]> {
    return this.http.get<agent[]>(
      `${environment.apiUrl}/${this.url}/addService/${JSON.stringify({agentId:agentId,serviceId:serviceId})}`
    );  
  }

  //Supprimer Un Agent
  public deleteAgent(agent: agent) {
    return this.http.delete<agent[]>(
      `${environment.apiUrl}/${this.url}/${agent.agentId}`
    );
  }

  //Cree Un Agent
  public createAgent(agent: agent): Observable<agent[]> {
    return this.http.post<agent[]>(`${environment.apiUrl}/${this.url}`, agent);
  }

  //Obtenir Les Agents En Utilisant Filter
  public getCustomAgents(customFilter: object): Observable<AgentResponse> {
    return this.http.get<AgentResponse>(
      `${environment.apiUrl}/${this.url}/filter/${JSON.stringify(customFilter)}`
    );
  }
}
