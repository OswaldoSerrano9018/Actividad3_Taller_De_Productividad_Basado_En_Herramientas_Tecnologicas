import {Component, Inject, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BomApiConnector} from "../../../http/BomApiConnector";
import {BomModelView, BomWihMaterials} from "../../../types";
import {ActivatedRoute} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-bom-edit-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
  ],
  templateUrl: './bom-edit-page.component.html',
  styleUrl: './bom-edit-page.component.scss'
})
export class BomEditPageComponent implements OnInit{

  protected current: BomWihMaterials = {id: 0, materials: []};
  protected id: number = 0;

  public constructor(
    private bomApiConnector: BomApiConnector,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    this.route.params.subscribe( params => {

      this.id = params["id"];

      this.bomApiConnector
          .single(this.id)
          .subscribe( (bom: BomWihMaterials) => {
            this.current = bom;
          } );
    });


  }

}
