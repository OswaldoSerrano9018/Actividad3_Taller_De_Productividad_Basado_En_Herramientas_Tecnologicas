import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {QuoteRow} from "../types";

@Injectable({
  providedIn: 'root'
})
export class QuoteApiConnector {

  public constructor(
    private httpClient: HttpClient,
    @Inject("API_URL") private apiUrl: string
  ) {
  }

  public all(): Observable<QuoteRow[]>{
    return new Observable<QuoteRow[]>();
  }

}
