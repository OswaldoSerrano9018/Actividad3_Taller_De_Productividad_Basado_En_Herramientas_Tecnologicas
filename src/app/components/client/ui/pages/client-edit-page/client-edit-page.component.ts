import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ClientModelView} from "../../../types";
import {ClientApiConnector} from "../../../http/ClientApiConnector";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-client-edit-page',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader
  ],
  templateUrl: './client-edit-page.component.html',
  styleUrl: './client-edit-page.component.scss'
})
export class ClientEditPageComponent implements OnInit{

  protected current: ClientModelView = {id: 0, name:"", contact: ""};
  protected id: number = 0;

  public constructor(
    private clientApiConnector: ClientApiConnector,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.route.params.subscribe( params => {

      this.id = params["id"];

      this.clientApiConnector
      .single(this.id)
      .subscribe( result => this.current = result );
    })


  }

}
