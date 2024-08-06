import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";
import {ClientModelView, ClientRow} from "../types";

@Injectable({
  providedIn: 'root'
})
export class ClientApiConnector {

  public constructor(
    private httpClient: HttpClient,
    @Inject("API_URL") private apiUrl: string
  ) {
  }

  public register(request: string): Observable<Object>{
    return this.httpClient.post(this.apiUrl + "/client", request);
  }

  public all(){
    return this.httpClient.get<ClientRow[]>(this.apiUrl + "/client");
  }

  public single(id: number){
    return this.httpClient.get<ClientModelView>(this.apiUrl + "/client/" + id);
  }

}
