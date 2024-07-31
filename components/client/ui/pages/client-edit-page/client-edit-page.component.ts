import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ClientModelView} from "../../../types";
import {ClientApiConnector} from "../../../http/ClientApiConnector";

@Component({
  selector: 'app-client-edit-page',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './client-edit-page.component.html',
  styleUrl: './client-edit-page.component.scss'
})
export class ClientEditPageComponent implements OnInit{

  protected current: ClientModelView = {id: 0, name:"", contact: ""};
  @Input('id') protected id: number = 0;

  public constructor(
    private clientApiConnector: ClientApiConnector,
  ) {
  }

  ngOnInit() {
    this.clientApiConnector
      .single(this.id)
      .subscribe( result => this.current = result );
  }

}
