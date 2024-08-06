import {Component, Input, OnInit} from '@angular/core';
import {MaterialTemplateModelView} from "../../../types";
import {MaterialApiConnector} from "../../../../http/MaterialApiConnector";
import {ActivatedRoute} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-material-template-edit-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './material-template-edit-page.component.html',
  styleUrl: './material-template-edit-page.component.scss'
})
export class MaterialTemplateEditPageComponent implements OnInit{

  protected current: MaterialTemplateModelView = {
    id: 0,
    name: "",
    unit: "",
    unitPrice: 0.0
  };
  protected id: number = 0;

  public constructor(
    private materialApiConnector: MaterialApiConnector,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe( params => {

      this.id = params["id"];

      this.materialApiConnector
          .single(this.id)
          .subscribe( result => this.current = result );
    });


    }

}
