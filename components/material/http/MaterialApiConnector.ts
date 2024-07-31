import {Observable} from "rxjs";
import {MaterialTemplateModelView, MaterialTemplateRow} from "../template/types";
import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MaterialApiConnector {

  public constructor(
    private httpClient: HttpClient,
    @Inject("API_URL") private apiUrl: string
  ) {
  }

  public all(){
    return this.httpClient.get<MaterialTemplateRow[]>(this.apiUrl + "/material/template");
    // return new Observable<MaterialTemplateRow[]>(subscriber =>  subscriber.next([{id: 1, name: "Madera de roble"}]));
  }

  public single(id: number){

    return this.httpClient.get<MaterialTemplateModelView>(this.apiUrl + "/material/template/" + id);
    // return new Observable<MaterialTemplateModelView>(subscriber =>
    //   subscriber.next({
    //     id: 2,
    //     name: "Madera de roble",
    //     unit: "Kilogramos",
    //     unitPrice: 100.1
    //   }));
  }

  public register(request: string){
    return new Observable();
  }

}
