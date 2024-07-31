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

  public register(nombre: string, contacto: string): Observable<ClientRow[]>{
    return new Observable();
  }

  public all(){
    return this.httpClient.get<ClientRow[]>(this.apiUrl + "/client");
    // return new Observable<ClientRow[]>(subscriber => subscriber.next([{name: "Jhon Lennon", id: 1}]))
  }

  public single(id: number){
    return this.httpClient.get<ClientModelView>(this.apiUrl + "/client/" + id);
    // return new Observable<ClientModelView>(subscriber => subscriber.next({id: 1, name: "Jhon Lennon", contact: "55 5555 5555"}))
  }

}
