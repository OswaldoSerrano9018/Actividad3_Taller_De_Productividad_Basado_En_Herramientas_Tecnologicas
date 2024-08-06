import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderModelView, OrderRow} from "../types";

@Injectable({
  providedIn: "root",
})
export class OrderApiConnector {
  public constructor(private http: HttpClient, @Inject("API_URL") apiUrl: string) {
  }

  public all(): Observable<OrderRow[]>{
    return new Observable();
  }

  public single(id: number): Observable<OrderModelView>{
    return new Observable();
  }
}
