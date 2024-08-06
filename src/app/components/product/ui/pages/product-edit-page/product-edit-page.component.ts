import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {ProductModelView} from "../../../types";
import {ProductApiConnector} from "../../../http/ProductApiConnector";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit-page',
  standalone: true,
  imports: [
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardSubtitle
  ],
  templateUrl: './product-edit-page.component.html',
  styleUrl: './product-edit-page.component.scss'
})
export class ProductEditPageComponent implements OnInit{

  protected current: ProductModelView = {bomId: 0, dimensions: "", id: 0, name: ""};
  protected id: number = 0;

  public constructor(
    private productApiConnector: ProductApiConnector,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
        this.route.params.subscribe( params => {
          this.id = params["id"];

          this.productApiConnector
            .single(this.id)
            .subscribe( result => this.current = result );
        });
  }

}
