import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {OrderModelView} from "../../../types";
import {OrderApiConnector} from "../../../http/OrderApiConnector";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order-edit-page',
  standalone: true,
  imports: [
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './order-edit-page.component.html',
  styleUrl: './order-edit-page.component.scss'
})
export class OrderEditPageComponent implements OnInit {

  protected current: OrderModelView = {
    id: '',
    quoteId: '',
    clientId: '',
    creationDate: '',
    deliveryDate: '',
    paymentMethod: '',
    status: '',
    notes: ''
  };
  protected id: number = 0;

  public constructor(
    private orderApiConnector: OrderApiConnector,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.orderApiConnector
        .single(this.id)
        .subscribe((order: OrderModelView) => {
          this.current = order;
        })
    });

  }

}
