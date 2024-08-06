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
  }

  public single(id: number){

    return this.httpClient.get<MaterialTemplateModelView>(this.apiUrl + "/material/template/" + id);

  }

  public register(request: string){
    return this.httpClient.post(this.apiUrl + "/material/template", request);
  }

}
