import {Observable} from "rxjs";
import {BomModelView, BomWihMaterials} from "../types";
import {HttpClient} from "@angular/common/http";
import {Inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BomApiConnector {

  public constructor(
    private httpClient: HttpClient,
    @Inject("API_URL") private apiUrl: string
  ) {
  }

  public all(): Observable<BomModelView[]> {

    return this.httpClient.get<BomModelView[]>(this.apiUrl + "/bom");

  }

  public single(id: number): Observable<BomWihMaterials> {
    return this.httpClient.get<BomWihMaterials>(this.apiUrl + "/bom/" + id);
  }

  public register(jsonRequest: string): Observable<any>{
    // return this.httpClient
    //   .post(this.apiUrl + "", jsonRequest);
    return new Observable();
  }

}
