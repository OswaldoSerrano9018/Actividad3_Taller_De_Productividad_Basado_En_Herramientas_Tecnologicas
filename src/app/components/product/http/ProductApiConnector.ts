import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductModelView, ProductRow} from "../types";

@Injectable({
  providedIn: "root",
})
export class ProductApiConnector {

  public constructor(private httpClient: HttpClient, @Inject("API_URL") private apiUrl: string) {
  }

  public all(): Observable<ProductRow[]>{
    return this.httpClient.get<ProductRow[]>(this.apiUrl + "/product");
  }

  public single(id: number): Observable<ProductModelView> {
    return this.httpClient.get<ProductModelView>(this.apiUrl + "/product/"+ id);
  }

  public register(request: String){
    return this.httpClient.post(this.apiUrl + "/product", request);
  }

}
